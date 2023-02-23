import { Router } from "express";
import { makeMidiaListRoutes } from "../factories/makeMidiaListRoutes";
const midiaListRoutes = makeMidiaListRoutes();

export class ApiRoutes {
	router = Router();
	midiaRoutes: Router;
	terminalRoutes: Router;
	midiaListRoutes: Router;

	constructor(
		midiaRoutes: Router,
		terminalRoutes: Router,
		midiaListRoutes: Router
	) {
		this.midiaRoutes = midiaRoutes;
		this.terminalRoutes = terminalRoutes;
		this.midiaListRoutes = midiaListRoutes;
		this.listenRoutes();
	}

	listenRoutes() {
		this.router.use("/terminal", this.terminalRoutes);
		this.router.use("/midia", this.midiaRoutes);
		this.router.use("/midialist", this.midiaListRoutes);
	}
}
