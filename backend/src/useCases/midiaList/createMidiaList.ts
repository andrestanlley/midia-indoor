import IMidiaList from "../../interfaces/IMidiaList";
import { randomUUID } from "node:crypto";
import { prisma } from "../../services/prismaService";

export default async function createMidiaList(name: string) {
	return prisma.midiaList.create({
		data: {
			id: randomUUID(),
			name,
		},
	});
}
