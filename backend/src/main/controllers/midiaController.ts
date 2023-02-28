import { IMediaProps } from "@domain/entities/Media";
import IController from "@main/interfaces/IController";
import { Request, Response } from "express";
import IMidiaService from "../interfaces/IMidiaService";

export class MidiaController implements IController {
	constructor(private readonly midiaService: IMidiaService) {}

	update = async (req: Request, res: Response) => {
		//TODO: implement
		return res.status(200);
	};
	find = async (req: Request, res: Response) => {
		//TODO: implement
		return res.status(200);
	};

	getAll = async (req: Request, res: Response) => {
		const midias = await this.midiaService.getAll();
		return res.status(200).send(midias);
	};
	create = async (req: Request, res: Response) => {
		const midia: IMediaProps = req.body;
		const result = await this.midiaService.create(midia);
		return res.status(201).send(result);
	};

	insert = async (req: Request, res: Response) => {
		const { midiaListId, midiaId } = req.body;
		const result = await this.midiaService.insertMidiaToList(
			midiaListId,
			midiaId
		);
		return res.status(200).send(result);
	};

	remove = async (req: Request, res: Response) => {
		const { midiaId } = req.params;
		const result = await this.midiaService.remove(midiaId);
		return res.status(202).send(result);
	};
}
