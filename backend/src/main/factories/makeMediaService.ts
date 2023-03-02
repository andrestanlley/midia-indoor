import { MediaService } from "@domain/useCases/mediaService";
import { makeMediaRepository } from "./makeMediaRepository";

export const makeMediaService = () => {
	return new MediaService(makeMediaRepository());
};
