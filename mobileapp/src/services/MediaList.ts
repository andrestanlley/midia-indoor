import IMedia from '../interfaces/IMedia';
import RNFS from 'react-native-fs';
import { outDir } from '../../config';

class MediaList {
  async execute(): Promise<IMedia[] | undefined> {
    try {
      const videos = await RNFS.readDir(outDir);

      const videosUri = videos.map(video => {
        return { filename: video.name, uri: video.path };
      });

      return videosUri;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new MediaList();
