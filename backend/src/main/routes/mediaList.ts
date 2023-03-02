import { Router } from "express";
import { makeMediaListController } from "../factories/makeMediaListController";

const mediaListRoutes = Router();

const { create, getAll, insertIntoMidiaList, remove } =
	makeMediaListController();

mediaListRoutes.get("/all", getAll);
mediaListRoutes.post("/", create);
mediaListRoutes.post("/insert", insertIntoMidiaList);
mediaListRoutes.delete("/", remove);

export { mediaListRoutes };
