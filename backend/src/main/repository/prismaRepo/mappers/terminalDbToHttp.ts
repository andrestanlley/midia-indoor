import { Terminal as TerminalDB } from "@prisma/client";
import { Terminal } from "@domain/entities/Terminal";
import { IMediaProps } from "@domain/entities/Media";

export default function terminalDbToHttp(
	terminal: TerminalDB,
	Medias: IMediaProps[] | undefined = undefined
) {
	const mappedTerminal = new Terminal({
		name: terminal.name,
		deviceId: terminal.deviceId,
		actualMedia: terminal.actualMedia!,
		lastSync: terminal.lastSync,
		mediaListId: terminal.mediaListId,
		Medias,
	});

	return {
		name: mappedTerminal.name,
		deviceId: mappedTerminal.deviceId,
		actualMedia: terminal.actualMedia,
		lastSync: mappedTerminal.lastSync,
		mediaListId: mappedTerminal.mediaListId,
		Medias: mappedTerminal.Medias,
	};
}
