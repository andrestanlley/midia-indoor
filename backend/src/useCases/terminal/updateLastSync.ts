import ITerminal from "../../interfaces/ITerminal";
import { prisma } from "../../services/prismaService";

export default async function updateLastSync({ id }: ITerminal) {
	return await prisma.terminal.update({
		where: {
			id,
		},
		data: {
			lastSync: new Date(),
		},
	});
}
