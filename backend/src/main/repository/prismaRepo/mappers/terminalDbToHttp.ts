import { Terminal as TerminalDB } from "@prisma/client";
import { Terminal } from "@domain/entities/Terminal";
import { Media } from "@domain/entities/Media";

export default function terminalDbToHttp(
	terminal: TerminalDB,
	Medias: Media[] | undefined = undefined
) {
	const mappedTerminal = new Terminal({
		name: terminal.name,
		deviceId: terminal.deviceId,
		lastSync: terminal.lastSync,
		mediaListId: terminal.mediaListId,
		Medias,
	});

	return {
		name: mappedTerminal.name,
		deviceId: mappedTerminal.deviceId,
		lastSync: mappedTerminal.lastSync,
		mediaListId: mappedTerminal.mediaListId,
		Medias: mappedTerminal.Medias,
	};
}
