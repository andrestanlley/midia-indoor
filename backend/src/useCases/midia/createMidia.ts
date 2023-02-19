import { prisma } from "../../services/prismaService";
import { randomUUID } from "node:crypto";
import IMidia from "../../interfaces/IMidia";

export default async function createMidia({ filename, type }: IMidia) {
	return await prisma.midia.create({
		data: {
			id: randomUUID(),
			filename,
			type,
		},
	});
}
