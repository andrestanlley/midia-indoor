import RNFS from 'react-native-fs';
import { outDir } from '../../config';

class MediaDownloader {
  execute = async (url: string, filename: string) => {
    console.log('baixando: ', filename);
    return RNFS.downloadFile({
      fromUrl: url,
      toFile: outDir + filename,
    }).promise.then(result => console.log(result));
  };
}

export default new MediaDownloader();
