import { Request, Response } from "express";
import IMidiaListController from "../interfaces/IMidiaListController";
import IMidiaListService from "../interfaces/IMidiaListService";

export class MidiaListController implements IMidiaListController{
	midiaListService: IMidiaListService;

	constructor(midiaListService: IMidiaListService) {
		this.midiaListService = midiaListService;
	}

	async create(req: Request, res: Response) {
		const { midiaListName } = req.body;
		const result = await this.midiaListService.create(midiaListName);
		return res.status(201).send(result);
	}

	async insertIntoMidiaList(req: Request, res: Response) {
		const { midiaListId, midiaId } = req.body;
		const result = await this.midiaListService.insertMidiaToList(
			midiaListId,
			midiaId
		);
		return res.status(200).send(result);
	}

	async remove(req: Request, res: Response) {
		const { midiaListId } = req.params;
		const result = await this.midiaListService.remove(midiaListId);
		return res.status(202).send(result);
	}
}
