import axios, { Axios } from 'axios';
import { baseUrl as baseURL } from '../../config';
import MidiaDownloader from './MidiaDownloader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IMidia from '../interfaces/IMidia';
import MidiaList from './MidiaList';
import MidiaDelete from './MidiaDelete';

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
          for await (let midia of remove) {
            const localMidias = await MidiaList.execute();
            const toDeleteMidia = localMidias?.find(
              file => file.filename === midia.filename,
            );
            await MidiaDelete.execute(toDeleteMidia?.uri);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export default new SyncTerminal();
