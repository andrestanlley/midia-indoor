import ITerminal from "./ITerminal";

export default interface ITerminalService {
	update: (terminal: ITerminal) => Promise<ITerminal>;
	addMidiaList: (terminalId: string, midiaListId: string) => Promise<ITerminal>;
	remove: (terminalId: string) => Promise<ITerminal | { status: number }>;
}
