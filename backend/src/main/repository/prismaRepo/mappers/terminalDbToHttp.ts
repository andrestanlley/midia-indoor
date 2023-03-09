import { Terminal as TerminalDB } from "@prisma/client";
import { Terminal } from "@domain/entities/Terminal";
import { Media } from "@domain/entities/Media";

export default function terminalDbToHttp(
	terminal: TerminalDB,
	Medias: Media[] | undefined = undefined
) {
	return new Terminal({
		name: terminal.name,
		deviceId: terminal.deviceId,
		lastSync: terminal.lastSync,
		mediaListId: terminal.mediaListId,
		Medias,
	});
}
