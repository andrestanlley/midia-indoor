import { useState, useEffect, useCallback } from 'react';
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

  const syncWithServer = useCallback(async () => {
    let toDeleteMidia: string | null;
    if (actualMidia.videoOrder === -1) {
      toDeleteMidia = await AsyncStorage.getItem('toDeleteMedia');
      await MidiaDelete.execute(toDeleteMidia!);
    }
    const midias = await MidiaList.execute();
    await SyncTerminal.execute(midias, actualMidia);
    if (midias) {
      return setLocalMedia(midias.filter(midia => midia.uri != toDeleteMidia));
    }
  }, [actualMidia, localMedia]);

  useEffect(() => {
    syncWithServer();
  }, [actualMidia]);

  function getNextVideo() {
    const { videoOrder } = actualMidia;
    if (localMedia && videoOrder < localMedia?.length - 1) {
      const nextVideoOrder = videoOrder + 1;
      return setActualMidia({
        videoOrder: nextVideoOrder,
        ...localMedia[nextVideoOrder],
      });
    }
    if (!localMedia.length || localMedia.length === 1) {
      return RNRestart.restart();
    }
    return setActualMidia({
      videoOrder: 0,
      ...localMedia[0],
    });
  }

  async function deleteOnError(video: IMidia) {
    if (!video.uri) return;
    try {
      await AsyncStorage.setItem('toDeleteMedia', video.uri);
    } catch (error) {
      console.log(error);
    }
    getNextVideo();
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
