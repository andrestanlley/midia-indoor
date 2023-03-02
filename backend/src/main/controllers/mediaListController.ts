import IController from "@main/interfaces/IController";
import { Request, Response } from "express";
import { IMediaListService } from "@domain/useCases/mediaListService";

export class MediaListController implements IController {
	constructor(private readonly midiaListService: IMediaListService) {}

	find = async (req: Request, res: Response) => {
		//TODO: implement
		return res.status(200);
	};
	getAll = async (req: Request, res: Response) => {
		const midiaList = await this.midiaListService.getAll();
		return res.status(200).send(midiaList);
	};

	create = async (req: Request, res: Response) => {
		const { midiaListName } = req.body;
		const result = await this.midiaListService.create(midiaListName);
		return res.status(201).send(result);
	};

	insertIntoMidiaList = async (req: Request, res: Response) => {
		const { midiaListId, midiaId } = req.body;
		const result = await this.midiaListService.insertMidiaToList(
			midiaListId,
			midiaId
		);
		return res.status(200).send(result);
	};

	remove = async (req: Request, res: Response) => {
		const { midiaListId } = req.params;
		const result = await this.midiaListService.remove(midiaListId);
		return res.status(202).send(result);
	};
}
