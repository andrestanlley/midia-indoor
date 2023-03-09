import { Router } from "express";
import { userRoutes } from "./user";
import { terminalRoutes } from "./terminal";
import { mediaRoutes } from "./media";
import { mediaListRoutes } from "./mediaList";
import { makeTerminalController } from "@main/factories/makeTerminalController";
import { login } from "@main/middlewares/loginMiddleware";

const apiRoutes = Router();

const { sync } = makeTerminalController();

apiRoutes.post("/sync", sync);
apiRoutes.use("/", userRoutes);
apiRoutes.use("/terminal", login, terminalRoutes);
apiRoutes.use("/media", login, mediaRoutes);
apiRoutes.use("/medialist", login, mediaListRoutes);

export { apiRoutes };
