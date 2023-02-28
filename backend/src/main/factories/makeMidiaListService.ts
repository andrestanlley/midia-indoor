import { MediaListService } from "@domain/useCases/mediaListService";
import { makeMidiaListRepository } from "./makeMidiaListRepository";
const midiaListRepository = makeMidiaListRepository();

export const makeMidiaListService = () => {
	return new MediaListService(midiaListRepository);
};
