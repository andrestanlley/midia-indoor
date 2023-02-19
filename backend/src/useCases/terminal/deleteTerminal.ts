import { prisma } from "../../services/prismaService";

export default async function deleteTerminal(terminalId: string) {
	return await prisma.terminal.delete({
		where: {
			id: terminalId,
		},
	});
}
