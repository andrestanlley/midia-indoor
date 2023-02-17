import { Request, Response } from "express";
import { syncMidiaService } from "../services/syncMidia";

export const syncMidia = async (req: Request, res: Response) => {
	const midias = await syncMidiaService(req.body?.localVideos);
	return res.status(200).send(midias);
};
