import ITerminal from "../../interfaces/ITerminal";
import { prisma } from "../../services/prismaService";

export default async function updateTerminal(terminal: ITerminal) {
	return await prisma.terminal.update({
		where: {
			id: terminal.id,
		},
		data: { ...terminal },
	});
}
