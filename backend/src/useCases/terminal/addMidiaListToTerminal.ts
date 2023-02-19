import { prisma } from "../../services/prismaService";

export default async function addMidiaListToTerminal(
	terminalId: string,
	midiaListId: string
) {
	return await prisma.terminal.update({
		where: {
			id: terminalId,
		},
		data: {
			midiaListId,
		},
	});
}
