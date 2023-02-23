import { Request, Response } from "express";
import ISyncResponse from "../interfaces/ISyncResponse";
import ITerminal from "../interfaces/ITerminal";
import ITerminalController from "../interfaces/ITerminalController";
import ITerminalService from "../interfaces/ITerminalService";

export class TerminalController implements ITerminalController {
	terminalService: ITerminalService;

	constructor(terminalService: ITerminalService) {
		this.terminalService = terminalService;
	}

	sync = async (req: Request, res: Response) => {
		const terminal: ITerminal = req.body;
		const result: ISyncResponse = await this.terminalService.sync(terminal);
		return res.status(result.status ?? 200).send(result);
	};

	update = async (req: Request, res: Response) => {
		const terminal: ITerminal = req.body;
		const result = await this.terminalService.update(terminal);
		return res.status(200).send(result);
	};

	addMidiaList = async (req: Request, res: Response) => {
		const { terminalId, midiaListId } = req.body;
		const result = await this.terminalService.addMidiaList(
			terminalId,
			midiaListId
		);
		return res.status(200).send(result);
	};

	remove = async (req: Request, res: Response) => {
		const { terminalId } = req.params;
		const result = await this.terminalService.remove(terminalId);
		return res.status(200).send(result);
	};
}
