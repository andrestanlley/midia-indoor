import { Request, Response } from "express";

export default interface IController {
    create: (req: Request, res: Response) => Promise<Response>;
	update?: (req: Request, res: Response) => Promise<Response>;
	find: (req: Request, res: Response) => Promise<Response>;
	getAll: (req: Request, res: Response) => Promise<Response>;
	remove: (req: Request, res: Response) => Promise<Response>;
}