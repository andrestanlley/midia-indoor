import { Terminal } from "@prisma/client";
import ITerminal from "@main/interfaces/ITerminal";

export default function terminalDbToHttp(terminal: Terminal | ITerminal) {
	return {
		...terminal,
	} as ITerminal;
}
