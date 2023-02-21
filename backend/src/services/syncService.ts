import IMidia from "../interfaces/IMidia";
import ISyncService from "../interfaces/ISyncService";
import ITerminal from "../interfaces/ITerminal";
import findMidiaList from "../useCases/midiaList/findMidiaList";
import findTerminal from "../useCases/terminal/findTerminal";
import updateLastSync from "../useCases/terminal/updateLastSync";

export class SyncService implements ISyncService {
	execute = async ({ mac, localVideos, deviceInfo }: ITerminal) => {
		if (!mac || !localVideos) return { status: 400 };
		const terminal: ITerminal = await findTerminal(mac);
		updateLastSync(terminal);
		console.log(terminal)

		const midias: IMidia[] = await findMidiaList(terminal.midiaListId);

		const download: IMidia[] = midias?.filter(
			(midiaLocal: IMidia) =>
				!localVideos?.find(
					(midia: IMidia) => midia.filename === midiaLocal.filename
				)
		);

		const remove: IMidia[] = localVideos?.filter(
			(midiaLocal: IMidia) =>
				!midias?.find((midia: IMidia) => midiaLocal.filename === midia.filename)
		);

		return { terminal, download, remove };
	};
}
