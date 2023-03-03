import { MediaListController } from "@main/controllers/mediaListController";
import { makeMediaListService } from "./makeMediaListService";

export const makeMediaListController = () => {
	return new MediaListController(makeMediaListService());
};
