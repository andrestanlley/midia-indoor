import { Router } from "express";
import IMidiaController from "../interfaces/IMidiaController";

export class MidiaRouter {
	router = Router();
	midiaController: IMidiaController;

	constructor(midiaController: IMidiaController) {
		this.midiaController = midiaController;
		this.midiaController.create = this.midiaController.create.bind(
			this.midiaController
		);
		this.midiaController.insertMidia = this.midiaController.insertMidia.bind(
			this.midiaController
		);
		this.midiaController.remove = this.midiaController.remove.bind(
			this.midiaController
		);
		this.listenRoutes();
	}

	listenRoutes() {
		this.router.post("/", this.midiaController.create);
		this.router.post("/", this.midiaController.insertMidia);
		this.router.delete("/:midiaId", this.midiaController.remove);
	}
}
