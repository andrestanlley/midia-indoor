import { uploadVideo } from "@main/middlewares/uploadMiddleware";
import { Router } from "express";
import { makeMidiaController } from "../factories/makeMidiaController";

const midiaRoutes = Router();

const { create, getAll, insert, remove } = makeMidiaController();

midiaRoutes.post("/", uploadVideo.single('video'), create);
midiaRoutes.get("/all", getAll);
midiaRoutes.post("/", insert);
midiaRoutes.delete("/:midiaId", remove);

export { midiaRoutes };
