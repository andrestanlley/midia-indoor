import IMidia from "@main/interfaces/IMidia";
import { randomUUID } from "node:crypto";
import { PrismaClient } from "@prisma/client";
import IMidiaRepository from "@domain/repositories/IMidiaRepository";
import midiasDbToHttp from "./mappers/midiasDbToHttp";
import midiaListDbToHttp from "./mappers/midiaListDbToHttp";

export class MidiaRepository implements IMidiaRepository {
	prisma: PrismaClient;

	constructor(prismaClient: PrismaClient) {
		this.prisma = prismaClient;
	}

	async getAll() {
		const midias = await this.prisma.midia.findMany();
		return midias.map(midiasDbToHttp);
	}

	async createMidia({ filename, type }: IMidia) {
		const midias = await this.prisma.midia.create({
			data: {
				id: randomUUID(),
				filename,
				type,
			},
		});

		return midiasDbToHttp(midias);
	}

	async insertMidiaToList(midiaListId: string, midiaId: string) {
		const midias = await this.prisma.midiaList.update({
			where: {
				id: midiaListId,
			},
			data: {
				midias: {
					connect: {
						id: midiaId,
					},
				},
			},
			include: {
				midias: true,
			},
		});

		return midiaListDbToHttp(midias);
	}

	async deleteMidia(midiaId: string) {
		const midias = await this.prisma.midia.delete({
			where: {
				id: midiaId,
			},
		});

		return midiasDbToHttp(midias);
	}
}
