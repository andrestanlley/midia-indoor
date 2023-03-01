const isTerminalSync = (lastSyncDate: Date) => {
	return new Date().getTime() / 60000 - lastSyncDate.getTime() / 60000 <= 2
		? true
		: false;
};

export default isTerminalSync;
