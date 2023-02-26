import IMidia from "./IMidia";
import ITerminal from "./ITerminal";

export default interface ISyncResponse {
	terminal?: ITerminal;
	status?: number;
	download?: IMidia[];
	delete?: IMidia[];
}
