import RNFS from 'react-native-fs';

export const baseUrl = 'https://sea-lion-app-virum.ondigitalocean.app/api/';
export const midiasUrl =
  'https://sea-lion-app-virum.ondigitalocean.app/videos/';
export const outDir = `${RNFS.ExternalDirectoryPath}/`;

export enum MessageCodes {
  VIDEO_DOWNLOAD = 'VIDEO_DOWNLOAD',
  VIDEO_DELETE = 'VIDEO_DELETE',
}
