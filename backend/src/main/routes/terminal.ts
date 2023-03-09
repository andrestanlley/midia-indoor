import { Router } from "express";
import { makeTerminalController } from "../factories/makeTerminalController";

const terminalRoutes = Router();

const { getAll, sync, update, remove, addMidiaList } = makeTerminalController();

export const syncTerminal = sync

terminalRoutes.get("/all", getAll);
terminalRoutes.put("/", update);
terminalRoutes.delete("/", remove);
terminalRoutes.post("/add-midialist", addMidiaList);

export { terminalRoutes };
