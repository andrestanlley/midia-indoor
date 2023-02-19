import { TerminalController } from "../controllers/terminalController";
import { makeTerminalService } from "./makeTerminalService";
const terminalService = makeTerminalService();

export const makeTerminalController = () => {
	return new TerminalController(terminalService);
};
