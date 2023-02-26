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

export interface VideoProps extends IMidia {
  videoOrder: number;
}

export default function MidiaPlayer() {
  const [actualMidia, setActualMidia] = useState<VideoProps>({
    videoOrder: -1,
  });
  const [localVideos, setLocalVideos] = useState<IMidia[]>();

  const getLocalVideos = useCallback(async () => {
    const midias = await MidiaList.execute();
    await SyncTerminal.execute(midias);
    if (midias) {
      return setLocalVideos(midias);
    }
  }, [actualMidia, localVideos]);

  useEffect(() => {
    getLocalVideos();
  }, []);

  function getNextVideo() {
    const { videoOrder } = actualMidia;
    if (localVideos && videoOrder < localVideos?.length - 1) {
      const nextVideoOrder = videoOrder + 1;
      return setActualMidia({
        videoOrder: nextVideoOrder,
        ...localVideos[nextVideoOrder],
      });
    }
    return RNRestart.restart();
  }

  async function deleteOnError(video: IMidia) {
    if (!video.uri) return;
    try {
      await MidiaDelete.execute(video.uri);
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
