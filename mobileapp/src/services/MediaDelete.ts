import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFS from 'react-native-fs';

class MediaDelete {
  async execute(fileUri?: string) {
    if (!fileUri) return;
    RNFS.exists(fileUri)
      .then(result => {
        console.log('file exists: ', result);

        if (result) {
          return RNFS.unlink(fileUri)
            .then(async () => {
              console.log('FILE DELETED');
              await AsyncStorage.removeItem('toDeleteMedia');
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
