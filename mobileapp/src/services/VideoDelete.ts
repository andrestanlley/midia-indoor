import RNFS from 'react-native-fs';

class VideoDelete {
  outDir = `${RNFS.ExternalDirectoryPath}/`;

  async execute(fileUri?: string) {
    if (!fileUri) return;
    const fileDir = this.outDir;
    RNFS.exists(fileDir)
      .then(result => {
        console.log('file exists: ', result);

        if (result) {
          return RNFS.unlink(fileDir)
            .then(() => {
              console.log('FILE DELETED');
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

export default new VideoDelete();
