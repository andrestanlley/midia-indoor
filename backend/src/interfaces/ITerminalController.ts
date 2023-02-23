import { Request, Response } from "express"

export default interface ITerminalController {
    sync: (req: Request, res: Response) => Promise<Response>
    update: (req: Request, res: Response) => Promise<Response>
    addMidiaList: (req: Request, res: Response) => Promise<Response>
    remove: (req: Request, res: Response) => Promise<Response>
}