import { MidiaService } from "@main/services/midiaService";
import { makeMidiaRepository } from "./makeMidiaRepository";
const midiaRepository = makeMidiaRepository();

export const makeMidiaService = () => {
	return new MidiaService(midiaRepository);
};
