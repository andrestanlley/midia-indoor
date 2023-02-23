import Video from 'react-native-video';
import IVideo from '../../interfaces/IVideo';
import defaultVideo from '../../assets/defaultvideo.mp4';
import globalStyle from '../../styles/globalStyle';
import { useEffect, useRef } from 'react';

interface PlayerProps {
  video: IVideo;
  nextVideo: () => void;
  deleteOnError: (video: IVideo) => Promise<void>;
}

export default function Player({
  video,
  nextVideo,
  deleteOnError,
}: PlayerProps) {
  // const videoRef = useRef<Video | null>();

  // useEffect(() => {
  //   console.log(videoRef.current?.props);
  // }, []);

  return (
    <Video
      source={video?.uri ? { uri: video.uri } : defaultVideo}
      resizeMode={'cover'}
      onEnd={() => nextVideo()}
      onVideoError={() => deleteOnError(video)}
      muted
      // ref={e => (videoRef.current = e)}
      style={globalStyle.container}
    />
  );
}
