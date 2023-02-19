import { Router } from "express";
import IMidiaListController from "../interfaces/IMidiaListController";

export class MidiaListRoutes {
	router = Router();
	midiaListController: IMidiaListController;

	constructor(midiaListController: IMidiaListController) {
		this.midiaListController = midiaListController;
		this.midiaListController.create = this.midiaListController.create.bind(
			this.midiaListController
		);
		this.midiaListController.insertIntoMidiaList =
			this.midiaListController.insertIntoMidiaList.bind(
				this.midiaListController
			);
		this.midiaListController.remove = this.midiaListController.remove.bind(
			this.midiaListController
		);
		this.listenRoutes();
	}

	listenRoutes() {
		this.router.post("/", this.midiaListController.create);
		this.router.post("/insert", this.midiaListController.insertIntoMidiaList);
		this.router.delete("/", this.midiaListController.remove);
	}
}
