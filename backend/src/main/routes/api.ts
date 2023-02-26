import { Router } from "express";
import { terminalRoutes } from "./terminal";
import { midiaRoutes } from "./midia";
import { midiaListRoutes } from "./midiaList";

const apiRoutes = Router();

apiRoutes.use("/terminal", terminalRoutes);
apiRoutes.use("/midia", midiaRoutes);
apiRoutes.use("/midialist", midiaListRoutes);

export { apiRoutes };
