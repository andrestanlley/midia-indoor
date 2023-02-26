import { Router } from "express";
import { makeTerminalController } from "../factories/makeTerminalController";

const terminalRoutes = Router();

const { sync, getAll, update, remove, addMidiaList } = makeTerminalController();

terminalRoutes.post("/sync", sync);
terminalRoutes.get("/all", getAll);
terminalRoutes.put("/", update);
terminalRoutes.delete("/", remove);
terminalRoutes.post("/add-midialist", addMidiaList);

export { terminalRoutes };
