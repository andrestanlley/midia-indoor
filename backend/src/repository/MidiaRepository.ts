import IMidia from "../interfaces/IMidia";
import { randomUUID } from "node:crypto";
import { PrismaClient } from "@prisma/client";
import midiasDbToHttp from "../mappers/midiasDbToHttp";
import IMidiaRepository from "../interfaces/IMidiaRepository";

export class MidiaRepository implements IMidiaRepository {
	prisma: PrismaClient;

	constructor(prismaClient: PrismaClient) {
		this.prisma = prismaClient;
	}

	async createMidia({ filename, type }: IMidia) {
		const midias = await this.prisma.midia.create({
			data: {
				id: randomUUID(),
				filename,
				type,
			},
		});

		return midiasDbToHttp([midias]);
	}

	async insertMidiaToList(midiaListId: string, midiaId: string) {
		const { midias } = await this.prisma.midiaList.update({
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

		return midiasDbToHttp(midias);
	}

	async deleteMidia(midiaId: string) {
		const midias = await this.prisma.midia.delete({
			where: {
				id: midiaId,
			},
		});

		return midiasDbToHttp([midias]);
	}
}
