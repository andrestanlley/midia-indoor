import { Request, Response } from "express";
import IController from "../interfaces/IController";
import { ITerminalService } from "../../domain/useCases/terminalService";
import { ITerminalProps } from "@domain/entities/Terminal";

interface ITerminalController extends IController {
	addMidiaList: (req: Request, res: Response) => Promise<Response>;
}

export class TerminalController implements ITerminalController {
	constructor(private readonly terminalService: ITerminalService) {}

	create = async (req: Request, res: Response) => {
		return res.status(200);
	};

	find = async (req: Request, res: Response) => {
		return res.status(200);
	};

	getAll = async (req: Request, res: Response) => {
		const terminais = await this.terminalService.getAll();
		return res.status(200).send(terminais);
	};

	sync = async (req: Request, res: Response) => {
		const terminal: ITerminalProps = req.body;
		const result = await this.terminalService.sync(terminal);
		return res.status(result ? 200 : 400).send(result);
	};

	update = async (req: Request, res: Response) => {
		const terminal: ITerminalProps = req.body;
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
