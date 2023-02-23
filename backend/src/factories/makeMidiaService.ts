import { MidiaService } from "../services/midiaService";
import { makeMidiaRepository } from "./makeMidiaRepository";
const midiaRepository = makeMidiaRepository();

export const makeMidiaService = () => {
	return new MidiaService(midiaRepository);
};
