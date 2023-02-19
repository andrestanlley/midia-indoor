import { useState, useEffect, useCallback, useContext } from 'react';
import { DevSettings, View } from 'react-native';
import Player from '../components/Player';
import IVideo from '../interfaces/IVideo';
import VideoDelete from '../services/VideoDelete';
import VideoDownloader from '../services/VideoDownloader';
import VideoList from '../services/VideoList';
import globalStyle from '../styles/globalStyle';
import { AppContext } from '../Contexts/Context';

interface VideoProps extends IVideo {
  videoOrder: number;
}

export default function MidiaPlayer() {
  const { index } = useContext(AppContext);
  console.log(index);
  const [localVideos, setLocalVideos] = useState<IVideo[]>();
  const [actualVideo, setActualVideo] = useState<VideoProps>({
    videoOrder: -1,
  });

  const getLocalVideos = useCallback(async () => {
    const midias = await VideoList.execute();
    await VideoDownloader.checkOnlineMidia(midias);
    if (midias) {
      return setLocalVideos(midias);
    }
  }, [actualVideo, localVideos]);

  useEffect(() => {
    getLocalVideos();
  }, []);

  function getNextVideo() {
    const { videoOrder } = actualVideo;
    if (localVideos && videoOrder < localVideos?.length - 1) {
      const nextVideoOrder = videoOrder + 1;
      return setActualVideo({
        videoOrder: nextVideoOrder,
        ...localVideos[nextVideoOrder],
      });
    }
    DevSettings.reload();
  }

  async function deleteOnError(video: IVideo) {
    try {
      await VideoDelete.execute(video.uri);
    } catch (error) {
      console.log(error);
    }
    getNextVideo();
  }

  const props = {
    video: actualVideo,
    nextVideo: getNextVideo,
    deleteOnError: deleteOnError,
  };

  return (
    <View style={globalStyle.container}>
      <Player {...props} />
    </View>
  );
}
