import { TerminalService } from "../services/terminalService";

export const makeTerminalService = () => {
	return new TerminalService();
};
