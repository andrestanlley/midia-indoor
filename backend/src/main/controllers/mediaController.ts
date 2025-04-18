import { IMediaProps } from "@domain/entities/Media";
import { IMediaService } from "@domain/useCases/mediaService";
import IController from "@main/interfaces/IController";
import { Request, Response } from "express";

export class MediaController implements IController {
	constructor(private readonly mediaService: IMediaService) {}

	update = async (req: Request, res: Response) => {
		const media: IMediaProps = req.body;
		const result = await this.mediaService.update(media);
		return res.status(200).send(result);
	};

	getAll = async (req: Request, res: Response) => {
		const medias = await this.mediaService.getAll();
		return res.status(200).send(medias);
	};

	create = async (req: Request, res: Response) => {
		if (!req.file) {
			return res.status(500);
		}

		const media: IMediaProps = {
			...JSON.parse(req.body.data),
			filename: req.file.filename,
			size: req.file.size,
		};

		const result = await this.mediaService.create(media);
		return res.status(201).send(result);
	};

	remove = async (req: Request, res: Response) => {
		const media: IMediaProps = req.body;
		const result = await this.mediaService.remove(media);
		return res.status(202).send(result);
	};
}
