import IDeviceInfo from "./IDeviceInfo";
import IMidia from "./IMidia";
import IMidiaList from "./IMidiaList";

export default interface ITerminal {
	id?: string;
	mac: string;
	localVideos?: IMidia[];
	deviceInfo?: IDeviceInfo;
	midiaListId: string | null;
	midiaList: IMidia[]
}
