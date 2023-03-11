import { ToastAndroid } from 'react-native';
import RNFS from 'react-native-fs';

class MediaDelete {
  async execute(fileUri?: string) {
    if (!fileUri) return;
    return RNFS.exists(fileUri)
      .then(result => {
        if (result) {
          return RNFS.unlink(fileUri)
            .then(async () => {
              ToastAndroid.show(
                'Atualizando sincronização',
                ToastAndroid.SHORT,
              );
            })
            .catch(err => {
              console.log(err.message);
            });
        }
      })
      .catch(err => {
        console.log(err.message);
      });
  }
}

export default new MediaDelete();
