import { Request, Response } from "express";

export default interface IMidiaController {
	getAll: (req: Request, res: Response) => Promise<Response>;
	create: (req: Request, res: Response) => Promise<Response>;
	insert: (req: Request, res: Response) => Promise<Response>;
	remove: (req: Request, res: Response) => Promise<Response>;
}
