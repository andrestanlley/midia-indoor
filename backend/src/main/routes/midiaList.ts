import { Router } from "express";
import { makeMidiaListController } from "../factories/makeMidiaListController";

const midiaListRoutes = Router();

const { create, insertIntoMidiaList, remove } = makeMidiaListController();

midiaListRoutes.post("/", create);
midiaListRoutes.post("/insert", insertIntoMidiaList);
midiaListRoutes.delete("/", remove);

export { midiaListRoutes };
