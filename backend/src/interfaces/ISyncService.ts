import IMidia from "./IMidia";
import ITerminal from "./ITerminal";

interface ISyncServiceResponse {
	terminal?: ITerminal;
	download?: IMidia[];
	delete?: IMidia[];
}

export default interface ISyncService {
	execute: (terminal: ITerminal) => Promise<ISyncServiceResponse>;
}
