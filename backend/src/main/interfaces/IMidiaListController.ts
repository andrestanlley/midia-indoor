import { Request, Response } from "express";

export default interface IMidiaListController {
	create: (req: Request, res: Response) => Promise<Response>;
	insertIntoMidiaList: (req: Request, res: Response) => Promise<Response>;
	remove: (req: Request, res: Response) => Promise<Response>;
}
