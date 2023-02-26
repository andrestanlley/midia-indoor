import MidiaTypes from './MidiaTypes';

export default interface IMidia {
  id?: string;
  filename?: string;
  uri?: string;
  type?: MidiaTypes;
}
