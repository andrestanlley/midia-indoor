import { Router } from "express";
import { terminalRoutes } from "./terminal";
import { mediaRoutes } from "./media";
import { mediaListRoutes } from "./mediaList";
import { makeTerminalController } from "@main/factories/makeTerminalController";

const apiRoutes = Router();

const { sync } = makeTerminalController();

apiRoutes.post("/sync", sync);
apiRoutes.use("/terminal", terminalRoutes);
apiRoutes.use("/media", mediaRoutes);
apiRoutes.use("/medialist", mediaListRoutes);

export { apiRoutes };
