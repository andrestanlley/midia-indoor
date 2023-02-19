import { ApiRoutes } from "../routes/api";
import { makeMidiaListRoutes } from "./makeMidiaListRoutes";
import { makeMidiaRoutes } from "./makeMidiaRoutes";
import { makeSyncController } from "./makeSyncController";
import { makeTerminalRoutes } from "./makeTerminalRoutes";
const syncController = makeSyncController();
const midiaRoutes = makeMidiaRoutes().router;
const terminalRoutes = makeTerminalRoutes().router;
const midiaListRoutes = makeMidiaListRoutes().router;

export const makeApiRoutes = () => {
	return new ApiRoutes(
		syncController,
		midiaRoutes,
		terminalRoutes,
		midiaListRoutes
	);
};
