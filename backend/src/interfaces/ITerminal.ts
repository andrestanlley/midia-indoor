import { Terminal } from "@prisma/client";
import IDeviceInfo from "./IDeviceInfo";
import IMidia from "./IMidia";

export default interface ITerminal extends Terminal {
	mac: string;
	localVideos?: IMidia[];
	deviceInfo?: IDeviceInfo;
}
