import ITerminalRepository from "@domain/repositories/ITerminalRepository";
import { ITerminalProps } from "@domain/entities/Terminal";
import { IMediaProps } from "@domain/entities/Media";
import midiasDbToHttp from "@main/repository/prismaRepo/mappers/mediasDbToHttp";

export interface ITerminalService {
	getAll: () => Promise<ITerminalProps[]>;
	sync: (terminal: ITerminalProps) => Promise<
		| {
				terminal: ITerminalProps;
				download: IMediaProps[];
				remove: IMediaProps[];
		  }
		| undefined
	>;
	update: (terminal: ITerminalProps) => Promise<ITerminalProps>;
	addMidiaList: (
		terminalId: string,
		midiaListId: string
	) => Promise<ITerminalProps>;
	remove: (terminalId: string) => Promise<boolean | { status: number }>;
}

export class TerminalService implements ITerminalService {
	constructor(private readonly terminalRepository: ITerminalRepository) {}

	sync = async ({ deviceId, localVideos, actualMedia }: ITerminalProps) => {
		if (!localVideos) return;
		const terminal: ITerminalProps = await this.terminalRepository.findTerminal(
			deviceId
		);
		this.terminalRepository.updateSync(terminal);

		const medias = terminal?.Medias?.map(midiasDbToHttp);

		const download: IMediaProps[] =
			medias?.filter(
				(midiaLocal: IMediaProps) =>
					!localVideos?.find(
						(midia: IMediaProps) => midia.filename === midiaLocal.filename
					)
			) ?? [];

		const remove: IMediaProps[] =
			localVideos?.filter(
				(midiaLocal: IMediaProps) =>
					!medias?.find(
						(midia: IMediaProps) => midiaLocal.filename === midia.filename
					)
			) ?? [];

		return { terminal, download, remove };
	};

	async getAll() {
		return await this.terminalRepository.getAll();
	}

	async update(terminal: ITerminalProps) {
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
