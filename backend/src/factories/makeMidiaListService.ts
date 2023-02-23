import { MidiaListService } from "../services/midiaListService";
import { makeMidiaListRepository } from "./makeMidiaListRepository";
const midiaListRepository = makeMidiaListRepository();

export const makeMidiaListService = () => {
	return new MidiaListService(midiaListRepository);
};
