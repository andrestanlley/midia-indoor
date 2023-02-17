import RNFS from 'react-native-fs';
import axios, {Axios} from 'axios';
import IVideo from '../interfaces/IVideo';
import VideoDelete from './VideoDelete';
import {baseUrl as baseURL} from '../../config';

class VideoDownloader {
  api: Axios = axios.create({
    baseURL,
    timeout: 1000,
  });
  permission: boolean = false;
  outDir = `${RNFS.ExternalDirectoryPath}/`;

  checkOnlineMidia = async (localVideos?: IVideo[]) => {
    try {
      const request = await this.api.post('/sync-midia', {
        localVideos,
      });
      const {DOWNLOAD, DELETE} = request.data;
      if (DOWNLOAD?.length) {
        for await (let midia of DOWNLOAD) {
          this.getVideo(midia.uri, midia.filename);
        }
      }
      if (DELETE?.length) {
        for await (let midia of DELETE) {
          VideoDelete.execute(midia.uri);
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
