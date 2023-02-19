import RNFS from 'react-native-fs';
import axios, { Axios } from 'axios';
import IVideo from '../interfaces/IVideo';
import VideoDelete from './VideoDelete';
import { baseUrl as baseURL } from '../../config';
import { getMacAddress } from 'react-native-device-info';

class VideoDownloader {
  api: Axios = axios.create({
    baseURL,
    timeout: 2000,
  });
  outDir = `${RNFS.ExternalDirectoryPath}/`;

  checkOnlineMidia = async (localVideos?: IVideo[]) => {
    try {
      const request = await this.api.post('/sync', {
        mac: await getMacAddress(),
        localVideos,
      });
      if (request.status === 200) {
        const { download, remove } = request.data;
        if (download?.length) {
          for await (let midia of download) {
            this.getVideo(midia.uri, midia.filename);
          }
        }
        if (remove?.length) {
          for await (let midia of remove) {
            VideoDelete.execute(midia.uri);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  getVideo = async (url: string, filename: string) => {
    console.log('baixando: ', filename);
    RNFS.downloadFile({
      fromUrl: url,
      toFile: this.outDir + filename,
    }).promise.then(result => console.log(result));
  };
}

export default new VideoDownloader();
