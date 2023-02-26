import { TerminalController } from "../controllers/terminalController";
import { makeTerminalService } from "./makeTerminalService";

export const makeTerminalController = () => {
	return new TerminalController(makeTerminalService());
};
