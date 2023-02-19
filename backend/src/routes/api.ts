import { Router } from "express";
import { makeMidiaListRoutes } from "../factories/makeMidiaListRoutes";
import ISyncController from "../interfaces/ISyncController";
const midiaListRoutes = makeMidiaListRoutes();

export class ApiRoutes {
	router = Router();
	syncController: ISyncController;
	midiaRoutes: Router;
	terminalRoutes: Router;
	midiaListRoutes: Router;

	constructor(
		syncController: ISyncController,
		midiaRoutes: Router,
		terminalRoutes: Router,
		midiaListRoutes: Router
	) {
		this.syncController = syncController;
		this.syncController.execute = this.syncController.execute.bind(
			this.syncController
		);
		this.midiaRoutes = midiaRoutes;
		this.terminalRoutes = terminalRoutes;
		this.midiaListRoutes = midiaListRoutes;
		this.listenRoutes();
	}

	listenRoutes() {
		this.router.post("/sync", this.syncController.execute);
		this.router.use("/terminal", this.terminalRoutes);
		this.router.use("/midia", this.midiaRoutes);
		this.router.use("/midialist", this.midiaListRoutes);
	}
}
