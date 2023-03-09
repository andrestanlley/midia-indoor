import { Router } from "express";
import { userRoutes } from "./user";
import { syncTerminal, terminalRoutes } from "./terminal";
import { mediaRoutes } from "./media";
import { mediaListRoutes } from "./mediaList";
import { login } from "@main/middlewares/loginMiddleware";

const apiRoutes = Router();

apiRoutes.post("/sync", syncTerminal);
apiRoutes.use("/", userRoutes);
apiRoutes.use("/terminal", login, terminalRoutes);
apiRoutes.use("/media", login, mediaRoutes);
apiRoutes.use("/medialist", login, mediaListRoutes);

export { apiRoutes };
