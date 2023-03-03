import { MediaListService } from "@domain/useCases/mediaListService";
import { makeMediaListRepository } from "./makeMediaListRepository";

export const makeMediaListService = () => {
	return new MediaListService(makeMediaListRepository());
};
