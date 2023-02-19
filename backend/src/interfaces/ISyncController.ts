import { Request, Response } from "express";

export default interface ISyncController {
    execute: (req: Request, res: Response) => Promise<Response>
}