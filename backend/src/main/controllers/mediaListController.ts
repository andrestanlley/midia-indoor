import IController from "@main/interfaces/IController";
import { Request, Response } from "express";
import { IMediaListService } from "@domain/useCases/mediaListService";

export class MediaListController implements IController {
	constructor(private readonly mediaListService: IMediaListService) {}

	find = async (req: Request, res: Response) => {
		//TODO: implement
		return res.status(200);
	};
	getAll = async (req: Request, res: Response) => {
		const mediaList = await this.mediaListService.getAll();
		return res.status(200).send(mediaList);
	};

	create = async (req: Request, res: Response) => {
		const { mediaListName } = req.body;
		const result = await this.mediaListService.create(mediaListName);
		return res.status(201).send(result);
	};

	insertMediaToList = async (req: Request, res: Response) => {
		const { mediaListId, mediasToConnect, mediasToDisconnect } = req.body;
		const result = await this.mediaListService.insertMediaToList(
			mediaListId,
			mediasToConnect,
			mediasToDisconnect
		);
		return res.status(200).send(result);
	};

	remove = async (req: Request, res: Response) => {
		const { mediaListId } = req.params;
		const result = await this.mediaListService.remove(mediaListId);
		return res.status(202).send(result);
	};
}
