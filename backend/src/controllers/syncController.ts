import { Request, Response } from "express";
import ITerminal from "../interfaces/ITerminal";
import ISyncResponse from "../interfaces/ISyncResponse";
import ISyncService from "../interfaces/ISyncService";
import ISyncController from "../interfaces/ISyncController";

export class SyncController implements ISyncController{
	syncService: ISyncService;

	constructor(syncService: ISyncService) {
		this.syncService = syncService
	}

	async execute(req: Request, res: Response) {
		const terminal: ITerminal = req.body;
		const result: ISyncResponse = await this.syncService.execute(terminal);
		return res.status(result.status ?? 200).send(result);
	}
}
