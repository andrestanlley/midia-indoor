import { ITerminalProps } from "@domain/entities/Terminal";
import { Terminal } from "@prisma/client";

export default interface ITerminalRepository {
	getAll: () => Promise<ITerminalProps[]>;
	addMidiaListToTerminal: (
		terminalId: string,
		midiaListId: string
	) => Promise<ITerminalProps>;
	createNewTerminal: (deviceId: string) => Promise<Terminal>;
	deleteTerminal: (terminalId: string) => Promise<boolean>;
	findTerminal: (deviceId: string) => Promise<ITerminalProps>;
	updateSync: (terminal: ITerminalProps) => Promise<ITerminalProps>;
	updateTerminal: (Terminal: ITerminalProps) => Promise<ITerminalProps>;
}
