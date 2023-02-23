import { TerminalService } from "../services/terminalService";
import { makeTerminalRepository } from "./makeTerminalRepository";
const terminalRepository = makeTerminalRepository();

export const makeTerminalService = () => {
	return new TerminalService(terminalRepository);
};
