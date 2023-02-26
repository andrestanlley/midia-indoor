import { MidiaController } from "@main/controllers/midiaController";
import { makeMidiaService } from "./makeMidiaService";

export const makeMidiaController = () => {
	return new MidiaController(makeMidiaService());
};
