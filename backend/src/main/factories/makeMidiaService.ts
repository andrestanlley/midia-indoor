import { MidiaService } from "@domain/useCases/midiaService";
import { makeMidiaRepository } from "./makeMidiaRepository";

export const makeMidiaService = () => {
	return new MidiaService(makeMidiaRepository());
};
