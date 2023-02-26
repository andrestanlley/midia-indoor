import { PrismaClient } from "@prisma/client";
import { randomUUID } from "node:crypto";
import ITerminal from "@main/interfaces/ITerminal";
import ITerminalRepository from "@domain/repositories/ITerminalRepository";
import terminalDbToHttp from "./mappers/terminalDbToHttp";

export class TerminalRepository implements ITerminalRepository {
	prisma: PrismaClient;

	constructor(prismaClient: PrismaClient) {
		this.prisma = prismaClient;
	}

	async getAll() {
		const terminais = await this.prisma.terminal.findMany({
			include: {
				MidiaList: {
					include: {
						midias: true,
					},
				},
			},
		});
		return terminais.map(terminalDbToHttp);
	}

	async addMidiaListToTerminal(deviceId: string, midiaListId: string) {
		const terminal = await this.prisma.terminal.update({
			where: {
				deviceId,
			},
			data: {
				midiaListId,
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
				midiaListId: null,
			},
		});

		return terminalDbToHttp(terminal);
	}

	async deleteTerminal(terminalId: string) {
		const terminal = await this.prisma.terminal.delete({
			where: {
				deviceId: terminalId,
			},
			include: {
				MidiaList: {
					select: {
						midias: true,
					},
				},
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
					MidiaList: {
						select: {
							midias: true,
						},
					},
				},
			});
		} catch (error) {
			terminal = await this.createNewTerminal();
		}

		return terminalDbToHttp(terminal);
	}

	async updateLastSync({ deviceId }: ITerminal) {
		const terminal = await this.prisma.terminal.update({
			where: {
				deviceId,
			},
			data: {
				lastSync: new Date(),
			},
		});

		return terminalDbToHttp(terminal);
	}

	async updateTerminal(terminal: ITerminal) {
		const terminalDb = await this.prisma.terminal.update({
			where: {
				deviceId: terminal.deviceId,
			},
			data: { ...terminal, MidiaList: undefined },
		});

		return terminalDbToHttp(terminalDb);
	}
}
