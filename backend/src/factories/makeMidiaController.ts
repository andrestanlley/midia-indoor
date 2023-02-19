import { MidiaController } from "../controllers/midiaController";
import { makeMidiaService } from "./makeMidiaService";
const midiaService = makeMidiaService();

export const makeMidiaController = () => {
	return new MidiaController(midiaService);
};
