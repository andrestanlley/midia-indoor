import { Request, Response } from "express"

export default interface ITerminalController {
    update: (req: Request, res: Response) => Promise<Response>
    addMidiaList: (req: Request, res: Response) => Promise<Response>
    remove: (req: Request, res: Response) => Promise<Response>
}