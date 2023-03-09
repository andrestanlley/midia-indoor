import { ITerminalProps } from "@domain/entities/Terminal";
import { Terminal as TerminalDB } from "@prisma/client";
import { Terminal } from "@domain/entities/Terminal";

export default interface ITerminalRepository {
	getAll: () => Promise<ITerminalProps[]>;
	addMediaListToTerminal: (
		terminalId: string,
		mediaListId: string
	) => Promise<ITerminalProps>;
	deleteTerminal: (terminalId: string) => Promise<boolean>;
	syncTerminal: (deviceId: string, actualMedia?: string) => Promise<ITerminalProps>;
	updateTerminal: (Terminal: ITerminalProps) => Promise<ITerminalProps>;
}
