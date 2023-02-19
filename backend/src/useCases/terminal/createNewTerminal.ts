import { prisma } from "../../services/prismaService";
import { randomUUID } from "node:crypto";

export default async function createNewTerminal(mac: string) {
	return await prisma.terminal.create({
		data: {
			id: randomUUID(),
			lastSync: new Date(),
			mac,
			name: "Novo Terminal",
			midiaListId: null,
		},
	});
}
