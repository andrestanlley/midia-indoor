import RNFS from 'react-native-fs';

export const baseUrl = 'http://elevamidia.com:3000/api/';
export const midiasUrl = 'http://elevamidia.com:3000/videos/';
export const outDir = `${RNFS.ExternalDirectoryPath}/`;

export enum MessageCodes {
  VIDEO_DOWNLOAD = 'VIDEO_DOWNLOAD',
  VIDEO_DELETE = 'VIDEO_DELETE',
}
