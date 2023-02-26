import ITerminal from "@main/interfaces/ITerminal";

export default interface ITerminalRepository {
	getAll: () => Promise<ITerminal[]>;
	addMidiaListToTerminal: (
		terminalId: string,
		midiaListId: string
	) => Promise<ITerminal>;
	createNewTerminal: (deviceId: string) => Promise<ITerminal>;
	deleteTerminal: (terminalId: string) => Promise<boolean>;
	findTerminal: (deviceId: string) => Promise<ITerminal>;
	updateLastSync: (terminal: ITerminal) => Promise<ITerminal>;
	updateTerminal: (Terminal: ITerminal) => Promise<ITerminal>;
}
