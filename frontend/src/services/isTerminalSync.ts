import { timeToUpdate } from "../config";

const isTerminalSync = (lastSyncDate: Date) => {
	return new Date().getTime() / timeToUpdate - lastSyncDate.getTime() / timeToUpdate <= 2
		? true
		: false;
};

export default isTerminalSync;
