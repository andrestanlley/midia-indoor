import ITerminal from "../../interfaces/ITerminal";
import { prisma } from "../../services/prismaService";
import createNewTerminal from "./createNewTerminal";

export default async function findTerminal(mac: string) {
	let terminal: ITerminal
	try {
		terminal = await prisma.terminal.findFirstOrThrow({
			where: {
				mac,
			},
		});
	} catch (error) {
		terminal = await createNewTerminal(mac)
	}

	return terminal
}
