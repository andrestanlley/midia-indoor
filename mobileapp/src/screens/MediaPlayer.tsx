import { useState, useCallback, useEffect } from 'react';
import { StatusBar, View } from 'react-native';
import defaultVideo from '../assets/defaultvideo.mp4';
import Video from 'react-native-video';
import RNRestart from 'react-native-restart';
import IMedia from '../interfaces/IMedia';
import MediaDelete from '../services/MediaDelete';
import MediaList from '../services/MediaList';
import globalStyle from '../styles/globalStyle';
import SyncTerminal from '../services/SyncTerminal';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface VideoProps extends IMedia {
  videoOrder: number;
}

export default function MediaPlayer() {
  const [actualMedia, setActualMedia] = useState<VideoProps>({
    videoOrder: -1,
  });
  const [localMedia, setLocalMedia] = useState<IMedia[]>([]);

  async function checkFilesToDelete() {
    const toDeleteMedia = await AsyncStorage.getItem('toDeleteMedia');
    if (actualMedia.videoOrder === -1 && toDeleteMedia) {
      const medias = JSON.parse(toDeleteMedia!);
      for await (let media of medias) {
        await MediaDelete.execute(media!);
      }
      await AsyncStorage.removeItem('toDeleteMedia');
      return RNRestart.restart();
    }
    return toDeleteMedia;
  }

  const syncWithServer = useCallback(async () => {
    const medias = await MediaList.execute();
    await SyncTerminal.execute(medias, actualMedia);
    if (medias) {
      return setLocalMedia(medias);
    }
  }, [actualMedia, localMedia]);

  useEffect(() => {
    syncWithServer();
  }, [actualMedia]);

  function setNextVideo(videoOrder: number) {
    const nextVideoOrder = videoOrder + 1;
    return setActualMedia({
      videoOrder: nextVideoOrder,
      ...localMedia[nextVideoOrder],
    });
  }

  function setPlaylistToStart() {
    setActualMedia({
      videoOrder: 0,
      ...localMedia[0],
    });
  }

  async function getNextVideo() {
    await syncWithServer();
    const { videoOrder } = actualMedia;
    const toDeleteMedia = await checkFilesToDelete();
    if (localMedia && videoOrder < localMedia?.length - 1) {
      return setNextVideo(videoOrder);
    }
    if (!localMedia.length || localMedia.length === 1 || toDeleteMedia) {
      return RNRestart.restart();
    }
    return setPlaylistToStart();
  }

  async function deleteOnError(video: IMedia) {
    if (!video.uri) return;
    try {
      await AsyncStorage.setItem(
        'toDeleteMedia',
        JSON.stringify([...video.uri]),
      );
      return RNRestart.restart();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={globalStyle.container}>
      <StatusBar hidden={true} />
      <Video
        source={actualMedia?.uri ? { uri: actualMedia.uri } : defaultVideo}
        style={globalStyle.container}
        resizeMode={'stretch'}
        fullscreen
        muted
        onEnd={() => getNextVideo()}
        onVideoError={() => deleteOnError(actualMedia)}
        onError={() => deleteOnError(actualMedia)}
      />
    </View>
  );
}
