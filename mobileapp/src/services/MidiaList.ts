import IMidia from '../interfaces/IMidia';
import RNFS from 'react-native-fs';
import { outDir } from '../../config';

class MidiaList {
  async execute(): Promise<IMidia[] | undefined> {
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

export default new MidiaList();
