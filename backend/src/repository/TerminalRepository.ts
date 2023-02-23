import { PrismaClient } from "@prisma/client";
import { randomUUID } from "node:crypto";
import ITerminal from "../interfaces/ITerminal";
import ITerminalRepository from "../interfaces/ITerminalRepository";
import terminalDbToHttp from "../mappers/terminalDbToHttp";

export class TerminalRepository implements ITerminalRepository {
	prisma: PrismaClient;

	constructor(prismaClient: PrismaClient) {
		this.prisma = prismaClient;
	}

	async addMidiaListToTerminal(terminalId: string, midiaListId: string) {
		const terminal = await this.prisma.terminal.update({
			where: {
				id: terminalId,
			},
			data: {
				midiaListId,
			},
		});

		return terminalDbToHttp(terminal);
	}

	async createNewTerminal(mac: string) {
		const terminal = await this.prisma.terminal.create({
			data: {
				id: randomUUID(),
				lastSync: new Date(),
				mac,
				name: "Novo Terminal",
				midiaListId: null,
			},
		});

		return terminalDbToHttp(terminal);
	}

	async deleteTerminal(terminalId: string) {
		const terminal = await this.prisma.terminal.delete({
			where: {
				id: terminalId,
			},
		});

		return terminal ? true : false;
	}

	async findTerminal(mac: string) {
		let terminal;
		try {
			terminal = await this.prisma.terminal.findFirstOrThrow({
				where: {
					mac,
				},
				include: {
					MidiaList: true,
				},
			});
		} catch (error) {
			terminal = await this.createNewTerminal(mac);
		}

		return terminalDbToHttp(terminal);
	}

	async updateLastSync({ id }: ITerminal) {
		const terminal = await this.prisma.terminal.update({
			where: {
				id,
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
				id: terminal.id,
			},
			data: { ...terminal },
		});

		return terminalDbToHttp(terminalDb);
	}
}
