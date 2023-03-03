import { Router } from "express";
import { makeMediaListController } from "../factories/makeMediaListController";

const mediaListRoutes = Router();

const { create, getAll, insertMediaToList, remove } =
	makeMediaListController();

mediaListRoutes.get("/all", getAll);
mediaListRoutes.post("/", create);
mediaListRoutes.post("/insert", insertMediaToList);
mediaListRoutes.delete("/", remove);

export { mediaListRoutes };
