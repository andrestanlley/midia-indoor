import { TerminalRoutes } from "../routes/terminal";
import { makeTerminalController } from "./makeTerminalController";
const terminalController = makeTerminalController()

export const makeTerminalRoutes = () => {
	return new TerminalRoutes(terminalController);
};
