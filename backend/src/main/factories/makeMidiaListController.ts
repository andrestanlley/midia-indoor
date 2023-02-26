import { MidiaListController } from "@main/controllers/midiaListController";
import { makeMidiaListService } from "./makeMidiaListService";

export const makeMidiaListController = () => {
	return new MidiaListController(makeMidiaListService());
};
