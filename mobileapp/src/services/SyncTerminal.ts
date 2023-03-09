import axios, { Axios } from 'axios';
import { baseUrl as baseURL } from '../../config';
import MediaDownloader from './MediaDownloader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IMedia from '../interfaces/IMedia';

class SyncTerminal {
  api: Axios = axios.create({
    baseURL,
    timeout: 3000,
    headers: {
      certDevice: 'ElevaMidia84',
    },
  });

  execute = async (localVideos: IMedia[] = [], actualMedia: IMedia) => {
    let deviceId = await AsyncStorage.getItem('deviceId');
    try {
      const request = await this.api.post('/sync', {
        deviceId: deviceId ?? '',
        localVideos,
        actualMedia,
      });
      if (request.status === 200) {
        const terminalServerId = request.data.terminal.deviceId;
        if (!deviceId || deviceId !== terminalServerId) {
          await AsyncStorage.setItem('deviceId', terminalServerId);
        }
        const { download, remove } = request.data;
        if (download?.length) {
          for await (let media of download) {
            await MediaDownloader.execute(media.uri, media.filename);
          }
        }
        if (remove?.length) {
          const toDeleteMedias = remove.map(
            (media: IMedia) =>
              localVideos?.find(file => file.filename === media.filename)?.uri,
          );
          await AsyncStorage.setItem(
            'toDeleteMedia',
            JSON.stringify(toDeleteMedias),
          );
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export default new SyncTerminal();
