import ITerminalRepository from "@domain/repositories/ITerminalRepository";
import { ITerminalProps } from "@domain/entities/Terminal";
import { IMediaProps } from "@domain/entities/Media";
import mediasDbToHttp from "@main/repository/prismaRepo/mappers/mediasDbToHttp";

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
	addMediaList: (
		terminalId: string,
		mediaListId: string
	) => Promise<ITerminalProps>;
	remove: (terminalId: string) => Promise<boolean | { status: number }>;
}

export class TerminalService implements ITerminalService {
	constructor(private readonly terminalRepository: ITerminalRepository) {}

	sync = async ({ deviceId, localVideos, actualMedia }: ITerminalProps) => {
		if (!localVideos) return;
		const terminal = await this.terminalRepository.syncTerminal(
			deviceId,
			actualMedia
		);

		const medias = terminal?.Medias?.map(mediasDbToHttp);

		const download: IMediaProps[] =
			medias?.filter(
				(mediaLocal: IMediaProps) =>
					!localVideos.map((md) => md.filename).includes(mediaLocal.filename) &&
					mediaLocal.expiresIn >= new Date()
			) ?? [];

		const remove: IMediaProps[] =
			localVideos?.filter((mediaLocal: IMediaProps) => {
				const media = medias?.find((md) => md.filename === mediaLocal.filename);

				return (
					mediaLocal.size < media?.size! ||
					!(media?.expiresIn! >= new Date()) ||
					!medias?.map((m) => m.filename).includes(mediaLocal.filename)
				);
			}) ?? [];

		return {
			terminal,
			download,
			remove,
		};
	};

	async getAll() {
		return await this.terminalRepository.getAll();
	}

	async update(terminal: ITerminalProps) {
		return await this.terminalRepository.updateTerminal(terminal);
	}

	async addMediaList(terminalId: string, mediaListId: string) {
		return await this.terminalRepository.addMediaListToTerminal(
			terminalId,
			mediaListId
		);
	}

	async remove(terminalId: string) {
		if (!terminalId) return { status: 400 };
		return await this.terminalRepository.deleteTerminal(terminalId);
	}
}
