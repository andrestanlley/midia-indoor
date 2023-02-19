import { MidiaListController } from "../controllers/midiaListController";
import { makeMidiaListService } from "./makeMidiaListService";
const midiaListService = makeMidiaListService();

export const makeMidiaListController = () => {
	return new MidiaListController(midiaListService);
};
