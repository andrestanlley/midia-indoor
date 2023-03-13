export default function isExpiredTerminal(expiresIn: Date) {
	const today = new Date();
	if (!(expiresIn! >= today)) {
		return 0;
	}
	if (expiresIn.getMonth() === today.getMonth()) {
		return expiresIn.getDate() - today.getDate();
	}
	return 30;
}
