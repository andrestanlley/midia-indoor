import IMidia from "../interfaces/IMidia";
import ITerminal from "../interfaces/ITerminal";
import ITerminalRepository from "@domain/repositories/ITerminalRepository";
import midiasDbToHttp from "../repository/prismaRepo/mappers/midiasDbToHttp";
import ISyncResponse from "../interfaces/ISyncResponse";

export interface ITerminalService {
	getAll: () => Promise<ITerminal[]>;
	sync: (terminal: ITerminal) => Promise<
		| ISyncResponse
		| {
				status: number;
				terminal?: undefined;
				download?: undefined;
				remove?: undefined;
		  }
	>;
	update: (terminal: ITerminal) => Promise<ITerminal>;
	addMidiaList: (terminalId: string, midiaListId: string) => Promise<ITerminal>;
	remove: (terminalId: string) => Promise<boolean | { status: number }>;
}

export class TerminalService implements ITerminalService {
	constructor(private readonly terminalRepository: ITerminalRepository) {}

	sync = async ({ deviceId, localVideos, deviceInfo }: ITerminal) => {
		if (!localVideos) return { status: 400 };
		const terminal: ITerminal = await this.terminalRepository.findTerminal(
			deviceId
		);
		this.terminalRepository.updateLastSync(terminal);

		const midias = terminal.MidiaList?.midias?.map(midiasDbToHttp);

		const download: IMidia[] =
			midias?.filter(
				(midiaLocal: IMidia) =>
					!localVideos?.find(
						(midia: IMidia) => midia.filename === midiaLocal.filename
					)
			) ?? [];

		const remove: IMidia[] =
			localVideos?.filter(
				(midiaLocal: IMidia) =>
					!midias?.find(
						(midia: IMidia) => midiaLocal.filename === midia.filename
					)
			) ?? [];

		return { terminal, download, remove };
	};

	async getAll() {
		return await this.terminalRepository.getAll();
	}

	async update(terminal: ITerminal) {
		return await this.terminalRepository.updateTerminal(terminal);
	}

	async addMidiaList(terminalId: string, midiaListId: string) {
		return await this.terminalRepository.addMidiaListToTerminal(
			terminalId,
			midiaListId
		);
	}

	async remove(terminalId: string) {
		if (!terminalId) return { status: 400 };
		return await this.terminalRepository.deleteTerminal(terminalId);
	}
}
