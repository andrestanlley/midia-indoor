import { MediaController } from "@main/controllers/mediaController";
import { makeMediaService } from "./makeMediaService";

export const makeMediaController = () => {
	return new MediaController(makeMediaService());
};
