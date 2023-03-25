import { Router } from "express";
import { userRoutes } from "./user";
import { syncTerminal, terminalRoutes } from "./terminal";
import { mediaRoutes } from "./media";
import { mediaListRoutes } from "./mediaList";
import { login } from "@main/middlewares/loginMiddleware";
import corsMiddleware from "@main/middlewares/corsOrigin";

const apiRoutes = Router();

apiRoutes.post("/sync", syncTerminal);
apiRoutes.use("/", corsMiddleware, userRoutes);
apiRoutes.use("/terminal", corsMiddleware, login, terminalRoutes);
apiRoutes.use("/media", corsMiddleware, login, mediaRoutes);
apiRoutes.use("/medialist", corsMiddleware, login, mediaListRoutes);

export { apiRoutes };
