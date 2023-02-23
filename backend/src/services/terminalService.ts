import IMidia from "../interfaces/IMidia";
import ITerminal from "../interfaces/ITerminal";
import ITerminalRepository from "../interfaces/ITerminalRepository";
import ITerminalService from "../interfaces/ITerminalService";

export class TerminalService implements ITerminalService {
	terminalRepository: ITerminalRepository;

	constructor(terminalRepository: ITerminalRepository) {
		this.terminalRepository = terminalRepository;
	}

	sync = async ({ mac, localVideos, deviceInfo }: ITerminal) => {
		if (!mac || !localVideos) return { status: 400 };
		const terminal: ITerminal = await this.terminalRepository.findTerminal(mac);
		this.terminalRepository.updateLastSync(terminal);

		const midias: IMidia[] = terminal.midiaList

		const download: IMidia[] = midias?.filter(
			(midiaLocal: IMidia) =>
				!localVideos?.find(
					(midia: IMidia) => midia.filename === midiaLocal.filename
				)
		) ?? [];

		const remove: IMidia[] = localVideos?.filter(
			(midiaLocal: IMidia) =>
				!midias?.find((midia: IMidia) => midiaLocal.filename === midia.filename)
		);

		return { terminal, download, remove };
	};

	async update(terminal: ITerminal) {
		return await this.terminalRepository.updateTerminal(terminal);
	}

	async addMidiaList(terminalId: string, midiaListId: string) {
		return await this.terminalRepository.addMidiaListToTerminal(terminalId, midiaListId);
	}

	async remove(terminalId: string) {
		if (!terminalId) return { status: 400 };
		return await this.terminalRepository.deleteTerminal(terminalId);
	}
}
