import { Media, Terminal as TerminalDB } from "@prisma/client";
import { ITerminalProps, Terminal } from "@domain/entities/Terminal";
import { IMediaListProps } from "@domain/entities/MediaList";

export default function terminalDbToHttp(
	terminal: TerminalDB,
	Medias: Media[] | undefined = undefined
) {
	return {
		name: terminal.name,
		deviceId: terminal.deviceId,
		lastSync: terminal.lastSync,
		mediaListId: terminal.mediaListId,
		Medias,
	} as ITerminalProps;
}
