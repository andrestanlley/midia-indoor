import { Request, Response } from "express";

export default interface IMidiaController {
	create: (req: Request, res: Response) => Promise<Response>;
	insertMidia: (req: Request, res: Response) => Promise<Response>;
	remove: (req: Request, res: Response) => Promise<Response>;
}
