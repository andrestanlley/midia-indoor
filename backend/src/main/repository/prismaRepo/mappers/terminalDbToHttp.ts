import { Terminal as TerminalDB } from "@prisma/client";
import { ITerminalProps, Terminal } from "@domain/entities/Terminal";
import { IMediaProps } from "@domain/entities/Media";

export default function terminalDbToHttp(
	terminal: TerminalDB,
	Medias: IMediaProps[] | undefined = undefined
): ITerminalProps {
	return new Terminal({
		name: terminal.name,
		deviceId: terminal.deviceId,
		actualMedia: terminal.actualMedia!,
		lastSync: terminal.lastSync,
		mediaListId: terminal.mediaListId,
		Medias,
	});
}
