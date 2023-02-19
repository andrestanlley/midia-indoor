import ITerminal from "../interfaces/ITerminal";
import ITerminalService from "../interfaces/ITerminalService";
import addMidiaListToTerminal from "../useCases/terminal/addMidiaListToTerminal";
import deleteTerminal from "../useCases/terminal/deleteTerminal";
import updateTerminal from "../useCases/terminal/updateTerminal";

export class TerminalService implements ITerminalService {
	async update(terminal: ITerminal) {
		return await updateTerminal(terminal);
	}

	async addMidiaList(terminalId: string, midiaListId: string) {
		return await addMidiaListToTerminal(terminalId, midiaListId);
	}

	async remove(terminalId: string) {
		if (!terminalId) return { status: 400 };
		return await deleteTerminal(terminalId);
	}
}
