import { Media, Terminal as TerminalDB } from "@prisma/client";
import { ITerminalProps, Terminal } from "@domain/entities/Terminal";

export default function terminalDbToHttp(
	terminal: TerminalDB,
	mediaList: Media[] | undefined = undefined
) {
	return {
		name: terminal.name,
		deviceId: terminal.deviceId,
		lastSync: terminal.lastSync,
		mediaListId: terminal.mediaListId,
		MediaList: mediaList,
	} as ITerminalProps;
}
