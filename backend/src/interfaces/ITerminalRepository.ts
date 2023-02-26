import ITerminal from "./ITerminal";

export default interface ITerminalRepository {
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
