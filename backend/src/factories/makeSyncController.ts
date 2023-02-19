import { SyncController } from "../controllers/syncController";
import { makeSyncService } from "./makeSyncService";
const syncService = makeSyncService();

export const makeSyncController = () => {
	return new SyncController(syncService);
};
