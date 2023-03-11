import { ToastAndroid } from 'react-native';
import RNFS from 'react-native-fs';
import { outDir } from '../../config';
import IMedia from '../interfaces/IMedia';

class MediaDownloader {
  execute = async ({ name, uri, filename }: IMedia) => {
    ToastAndroid.show(
      `Sincronizando ${name!.toUpperCase()}`,
      ToastAndroid.SHORT,
    );
    return RNFS.downloadFile({
      fromUrl: uri!,
      toFile: outDir + filename,
    }).promise.then(() =>
      ToastAndroid.show('Sincronizado com sucesso!', ToastAndroid.SHORT),
    );
  };
}

export default new MediaDownloader();
