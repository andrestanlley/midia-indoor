import { SyncService } from "../services/syncService";

export const makeSyncService = () => {
	return new SyncService();
};
