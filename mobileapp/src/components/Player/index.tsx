import Video from 'react-native-video';
import IVideo from '../../interfaces/IVideo';
import defaultVideo from '../../default/defaultvideo.mp4';
import globalStyle from '../../styles/globalStyle';

interface PlayerProps {
  video: IVideo;
  nextVideo: () => void;
  deleteOnError: (video: IVideo) => Promise<void>;
}

export default function Player({video, nextVideo, deleteOnError}: PlayerProps) {
  return (
    <Video
      source={video?.uri ? {uri: video.uri} : defaultVideo}
      resizeMode={'cover'}
      onEnd={() => nextVideo()}
      onVideoError={() => deleteOnError(video)}
      muted
      style={globalStyle.container}
    />
  );
}
