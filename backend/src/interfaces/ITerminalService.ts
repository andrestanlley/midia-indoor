import IMidia from "./IMidia";
import ISyncResponse from "./ISyncResponse";
import ITerminal from "./ITerminal";

export default interface ITerminalService {
	sync: (terminal: ITerminal) => Promise<
		| ISyncResponse
		| {
				status: number;
				terminal?: undefined;
				download?: undefined;
				remove?: undefined;
		  }
	>;
	update: (terminal: ITerminal) => Promise<ITerminal>;
	addMidiaList: (terminalId: string, midiaListId: string) => Promise<ITerminal>;
	remove: (terminalId: string) => Promise<boolean | { status: number }>;
}
