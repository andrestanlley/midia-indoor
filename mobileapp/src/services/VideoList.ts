import IVideo from '../interfaces/IVideo';
import RNFS from 'react-native-fs';

class VideoList {
  outDir = `${RNFS.ExternalDirectoryPath}/`;

  async execute(): Promise<IVideo[] | undefined> {
    const videos = await RNFS.readDir(this.outDir);

    const videosUri = videos.map(video => {
      return {filename: video.name, uri: video.path};
    });

    return videosUri;
  }
}

export default new VideoList();
