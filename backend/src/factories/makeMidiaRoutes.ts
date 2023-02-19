import { MidiaRouter } from "../routes/midia";
import { makeMidiaController } from "./makeMidiaController";
const midiaController = makeMidiaController();

export const makeMidiaRoutes = () => {
	return new MidiaRouter(midiaController);
};
