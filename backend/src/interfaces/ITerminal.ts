import IDeviceInfo from "./IDeviceInfo";
import IMidia from "./IMidia";
import IMidiaList from "./IMidiaList";

export default interface ITerminal {
	deviceId: string;
	localVideos?: IMidia[];
	deviceInfo?: IDeviceInfo;
	midiaListId: string | null;
	MidiaList: IMidiaList
}
