import { TerminalService } from "../../domain/useCases/terminalService";
import { makeTerminalRepository } from "./makeTerminalRepository";

export const makeTerminalService = () => {
	return new TerminalService(makeTerminalRepository());
};
