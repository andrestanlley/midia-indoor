import { PrismaClient } from "@prisma/client";
import { randomUUID } from "node:crypto";
import ITerminalRepository from "@domain/repositories/ITerminalRepository";
import terminalDbToHttp from "./mappers/terminalDbToHttp";
import { ITerminalProps } from "@domain/entities/Terminal";
import mediasDbToHttp from "./mappers/mediasDbToHttp";

export class TerminalRepository implements ITerminalRepository {
	constructor(private readonly prisma: PrismaClient) {
		this.prisma = prisma;
	}

	async getAll() {
		const terminais = await this.prisma.terminal.findMany({
			include: {
				MediaList: {
					select: {
						medias: true,
					},
				},
			},
		});

		return terminais.map((terminal) =>
			terminalDbToHttp(terminal, terminal.MediaList?.medias.map(mediasDbToHttp))
		);
	}

	async addMediaListToTerminal(deviceId: string, mediaListId: string) {
		const terminal = await this.prisma.terminal.update({
			where: {
				deviceId,
			},
			data: {
				mediaListId,
			},
		});

		return terminalDbToHttp(terminal);
	}

	async deleteTerminal(terminalId: string) {
		const terminal = await this.prisma.terminal.delete({
			where: {
				deviceId: terminalId,
			},
		});

		return terminal ? true : false;
	}

	async syncTerminal(deviceId: string, actualMedia?: string) {
		const terminal = await this.prisma.terminal.upsert({
			where: {
				deviceId,
			},
			update: {
				lastSync: new Date(),
				actualMedia,
			},
			create: {
				deviceId: randomUUID(),
				lastSync: new Date(),
				name: "Novo Terminal",
				mediaListId: null,
			},
			include: {
				MediaList: {
					select: {
						medias: true,
					},
				},
			},
		});

		const medias = terminal.MediaList?.medias.map(mediasDbToHttp);

		return terminalDbToHttp(terminal, medias);
	}

	async updateTerminal(terminal: ITerminalProps) {
		const terminalDb = await this.prisma.terminal.update({
			where: {
				deviceId: terminal.deviceId,
			},
			data: { name: terminal.name },
		});

		return terminalDbToHttp(terminalDb);
	}
}
