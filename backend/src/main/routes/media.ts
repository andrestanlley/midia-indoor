import { uploadVideo } from "@main/middlewares/uploadMiddleware";
import { Router } from "express";
import { makeMediaController } from "../factories/makeMediaController";

const mediaRoutes = Router();

const { create, getAll, insert, remove } = makeMediaController();

mediaRoutes.post("/", uploadVideo.single("video"), create);
mediaRoutes.get("/all", getAll);
mediaRoutes.post("/", insert);
mediaRoutes.delete("/", remove);

export { mediaRoutes };
