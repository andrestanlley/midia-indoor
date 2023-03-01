import { PrismaClient } from "@prisma/client";
import { randomUUID } from "node:crypto";
import ITerminalRepository from "@domain/repositories/ITerminalRepository";
import terminalDbToHttp from "./mappers/terminalDbToHttp";
import { ITerminalProps } from "@domain/entities/Terminal";

export class TerminalRepository implements ITerminalRepository {
	prisma: PrismaClient;

	constructor(prismaClient: PrismaClient) {
		this.prisma = prismaClient;
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
			terminalDbToHttp(terminal, terminal.MediaList?.medias)
		);
	}

	async addMidiaListToTerminal(deviceId: string, mediaListId: string) {
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

	async createNewTerminal() {
		const terminal = await this.prisma.terminal.create({
			data: {
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

		return terminal;
	}

	async deleteTerminal(terminalId: string) {
		const terminal = await this.prisma.terminal.delete({
			where: {
				deviceId: terminalId,
			},
		});

		return terminal ? true : false;
	}

	async findTerminal(deviceId: string) {
		let terminal;
		try {
			terminal = await this.prisma.terminal.findFirstOrThrow({
				where: {
					deviceId,
				},
				include: {
					MediaList: {
						include: {
							medias: true,
						},
					},
				},
			});
		} catch (error) {
			terminal = await this.createNewTerminal();
		}

		return terminalDbToHttp(terminal, terminal.MediaList?.medias);
	}

	async updateSync({ deviceId, actualMedia }: ITerminalProps) {
		const queryObject = {
			lastSync: new Date(),
			actualMedia: actualMedia
				? {
						connect: {
							id: actualMedia?.id,
						},
				  }
				: undefined,
		};
		const terminal = await this.prisma.terminal.update({
			where: {
				deviceId,
			},
			data: queryObject
		});

		return terminalDbToHttp(terminal);
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
