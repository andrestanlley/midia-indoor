import RNFS from 'react-native-fs';

export const baseUrl = 'https://elevamidia.com/api/';
export const midiasUrl = 'https://elevamidia.com/videos/';
export const outDir = `${RNFS.ExternalDirectoryPath}/`;

export enum MessageCodes {
  VIDEO_DOWNLOAD = 'VIDEO_DOWNLOAD',
  VIDEO_DELETE = 'VIDEO_DELETE',
}
