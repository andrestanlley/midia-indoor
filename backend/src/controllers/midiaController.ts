import { Request, Response } from "express";
import IMidia from "../interfaces/IMidia";
import IMidiaController from "../interfaces/IMidiaController";
import IMidiaService from "../interfaces/IMidiaService";

export class MidiaController implements IMidiaController {
	midiaService: IMidiaService;

	constructor(midiaService: IMidiaService) {
		this.midiaService = midiaService;
	}
	async create(req: Request, res: Response) {
		const midia: IMidia = req.body;
		const result = await this.midiaService.create(midia);
		return res.status(201).send(result);
	}

	async insertMidia(req: Request, res: Response) {
		const { midiaListId, midiaId } = req.body;
		const result = await this.midiaService.insertMidiaToList(
			midiaListId,
			midiaId
		);
		return res.status(200).send(result);
	}

	async remove(req: Request, res: Response) {
		const { midiaId } = req.params;
		const result = await this.midiaService.remove(midiaId);
		return res.status(202).send(result);
	}
}
