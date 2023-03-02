import { Router } from "express";
import { terminalRoutes } from "./terminal";
import { mediaRoutes } from "./media";
import { mediaListRoutes } from "./mediaList";

const apiRoutes = Router();

apiRoutes.use("/terminal", terminalRoutes);
apiRoutes.use("/media", mediaRoutes);
apiRoutes.use("/medialist", mediaListRoutes);

export { apiRoutes };
