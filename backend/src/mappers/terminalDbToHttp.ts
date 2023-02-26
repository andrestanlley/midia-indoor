import { Terminal } from "@prisma/client";
import ITerminal from "../interfaces/ITerminal";

export default function terminalDbToHttp(terminal: Terminal | ITerminal) {
	return {
		...terminal,
	} as ITerminal;
}
