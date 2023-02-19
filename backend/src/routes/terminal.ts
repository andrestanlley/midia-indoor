import { Router } from "express";
import ITerminalController from "../interfaces/ITerminalController";

export class TerminalRoutes {
	router = Router();
	terminalController: ITerminalController;

	constructor(terminalController: ITerminalController) {
		this.terminalController = terminalController;
		this.terminalController.update = this.terminalController.update.bind(
			this.terminalController
		);
		this.terminalController.remove = this.terminalController.remove.bind(
			this.terminalController
		);
		this.terminalController.addMidiaList =
			this.terminalController.addMidiaList.bind(this.terminalController);
		this.listenRoutes();
	}

	listenRoutes() {
		this.router.put("/", this.terminalController.update);
		this.router.delete("/", this.terminalController.remove);
		this.router.post("/add-midialist", this.terminalController.addMidiaList);
	}
}
