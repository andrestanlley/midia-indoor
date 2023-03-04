import { uploadVideo } from "@main/middlewares/uploadMiddleware";
import { Router } from "express";
import { makeMediaController } from "../factories/makeMediaController";

const mediaRoutes = Router();

const { create, getAll, remove } = makeMediaController();

mediaRoutes.post("/", uploadVideo.single("video"), create);
mediaRoutes.get("/all", getAll);
mediaRoutes.delete("/", remove);

export { mediaRoutes };
