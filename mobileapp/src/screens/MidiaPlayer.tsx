import { useState, useCallback, useEffect } from 'react';
import { StatusBar, View } from 'react-native';
import defaultVideo from '../assets/defaultvideo.mp4';
import Video from 'react-native-video';
import RNRestart from 'react-native-restart';
import IMidia from '../interfaces/IMidia';
import MidiaDelete from '../services/MidiaDelete';
import MidiaList from '../services/MidiaList';
import globalStyle from '../styles/globalStyle';
import SyncTerminal from '../services/SyncTerminal';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface VideoProps extends IMidia {
  videoOrder: number;
}

export default function MidiaPlayer() {
  const [actualMidia, setActualMidia] = useState<VideoProps>({
    videoOrder: -1,
  });
  const [localMedia, setLocalMedia] = useState<IMidia[]>([]);

  async function checkFilesToDelete() {
    if (actualMidia.videoOrder === -1) {
      const toDeleteMidia = await AsyncStorage.getItem('toDeleteMedia');
      await MidiaDelete.execute(toDeleteMidia!);
      return toDeleteMidia;
    }
  }

  const syncWithServer = useCallback(async () => {
    const toDeleteMidia = await checkFilesToDelete();
    const midias = await MidiaList.execute();
    await SyncTerminal.execute(midias, actualMidia);
    if (midias) {
      return setLocalMedia(midias.filter(midia => midia.uri != toDeleteMidia));
    }
  }, [actualMidia, localMedia]);

  useEffect(() => {
    syncWithServer();
  }, [actualMidia]);

  function setNextVideo(videoOrder: number) {
    const nextVideoOrder = videoOrder + 1;
    return setActualMidia({
      videoOrder: nextVideoOrder,
      ...localMedia[nextVideoOrder],
    });
  }

  function setPlaylistToStart() {
    setActualMidia({
      videoOrder: 0,
      ...localMedia[0],
    });
  }

  async function getNextVideo() {
    const { videoOrder } = actualMidia;
    const toDeleteMidia = await checkFilesToDelete();
    if (!localMedia.length || localMedia.length === 1 || toDeleteMidia) {
      return RNRestart.restart();
    }
    if (localMedia && videoOrder < localMedia?.length - 1) {
      return setNextVideo(videoOrder);
    }
    return setPlaylistToStart();
  }

  async function deleteOnError(video: IMidia) {
    if (!video.uri) return;
    try {
      await AsyncStorage.setItem('toDeleteMedia', video.uri);
    } catch (error) {
      console.log(error);
    } finally {
      return RNRestart.restart();
    }
  }

  return (
    <View style={globalStyle.container}>
      <StatusBar hidden={true} />
      <Video
        source={actualMidia?.uri ? { uri: actualMidia.uri } : defaultVideo}
        style={globalStyle.container}
        resizeMode={'stretch'}
        fullscreen
        muted
        onEnd={() => getNextVideo()}
        onVideoError={() => deleteOnError(actualMidia)}
      />
    </View>
  );
}
