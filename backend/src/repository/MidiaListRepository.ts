import { PrismaClient } from "@prisma/client";
import { randomUUID } from "node:crypto";
import IMidiaListRepository from "../interfaces/IMidiaListRepository";
import midiaListDbToHttp from "../mappers/midiaListDbToHttp";
import midiasDbToHttp from "../mappers/midiasDbToHttp";

export class MidiaListRepository implements IMidiaListRepository{
	prisma: PrismaClient;

	constructor(prismaClient: PrismaClient) {
		this.prisma = prismaClient;
	}

	async createMidiaList(name: string) {
		const midiaList = await this.prisma.midiaList.create({
			data: {
				id: randomUUID(),
				name,
			},
		});

		return midiaListDbToHttp(midiaList)

	}

	async deleteMidiaList(midiaListId: string) {
		const midiaList = await this.prisma.midiaList.delete({
			where: {
				id: midiaListId,
			},
		});

		return midiaListDbToHttp(midiaList)
	}

	async findMidiaList(id: string | null) {
		if (!id) return [];
		const midiaList = await this.prisma.midiaList.findFirst({
			where: {
				id,
			},
			select: {
				midias: true,
			},
		});
		if (!midiaList || !midiaList.midias.length) return [];
		return midiasDbToHttp(midiaList.midias);
	}

	async insertMidiaToList(midiaListId: string, midiaId: string) {
		const midiaList = await this.prisma.midiaList.update({
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

		return midiaListDbToHttp(midiaList)

	}
}
