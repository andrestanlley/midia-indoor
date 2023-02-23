import { ApiRoutes } from "../routes/api";
import { makeMidiaListRoutes } from "./makeMidiaListRoutes";
import { makeMidiaRoutes } from "./makeMidiaRoutes";
import { makeTerminalRoutes } from "./makeTerminalRoutes";
const midiaRoutes = makeMidiaRoutes().router;
const terminalRoutes = makeTerminalRoutes().router;
const midiaListRoutes = makeMidiaListRoutes().router;

export const makeApiRoutes = () => {
	return new ApiRoutes(
		midiaRoutes,
		terminalRoutes,
		midiaListRoutes
	);
};
