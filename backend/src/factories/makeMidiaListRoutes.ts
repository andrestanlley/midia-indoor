import { MidiaListRoutes } from "../routes/midiaList";
import { makeMidiaListController } from "./makeMidiaListController";
const midiaListController = makeMidiaListController();

export const makeMidiaListRoutes = () => {
	return new MidiaListRoutes(midiaListController);
};
