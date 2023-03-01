import axios, { Axios } from 'axios';
import { baseUrl as baseURL } from '../../config';
import MidiaDownloader from './MidiaDownloader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IMidia from '../interfaces/IMidia';
import MidiaList from './MidiaList';

class SyncTerminal {
  api: Axios = axios.create({
    baseURL,
    timeout: 2000,
  });

  execute = async (localVideos: IMidia[] = [], actualMidia: IMidia) => {
    let deviceId = await AsyncStorage.getItem('deviceId');
    try {
      const request = await this.api.post('/terminal/sync', {
        deviceId,
        localVideos,
        actualMidia,
      });
      if (request.status === 200) {
        const terminalServerId = request.data.terminal.deviceId;
        if (!deviceId || deviceId != terminalServerId) {
          await AsyncStorage.setItem('deviceId', terminalServerId);
        }
        const { download, remove } = request.data;
        if (download?.length) {
          for await (let midia of download) {
            await MidiaDownloader.execute(midia.uri, midia.filename);
          }
        }
        if (remove?.length) {
          const media = remove[0];
          const localMedias = await MidiaList.execute();
          const toDeleteMedia = localMedias?.find(
            file => file.filename === media.filename,
          );
          await AsyncStorage.setItem('toDeleteMedia', toDeleteMedia?.uri!);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export default new SyncTerminal();
