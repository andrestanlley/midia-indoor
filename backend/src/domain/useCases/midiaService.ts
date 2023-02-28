import IMediaRepository from "@domain/repositories/IMediaRepository";
import { IMediaProps } from "@domain/entities/Media";
import { IMediaListProps } from "@domain/entities/MediaList";

interface IMidiaService {
	getAll: () => Promise<IMediaProps[]>;
	create: (midia: IMediaProps) => Promise<IMediaProps>;
	insertMidiaToList: (
		midiaListId: string,
		midiaId: string
	) => Promise<IMediaListProps>;
	remove: (midiaId: string) => Promise<IMediaProps>;
}

export class MidiaService implements IMidiaService {
	constructor(private readonly mediaRepository: IMediaRepository) {}

	async getAll() {
		return await this.mediaRepository.getAll();
	}

	async create(midia: IMediaProps) {
		return await this.mediaRepository.createMedia(midia);
	}

	async insertMidiaToList(midiaListId: string, mediaId: string) {
		return await this.mediaRepository.insertMidiaToList(midiaListId, mediaId);
	}

	async remove(mediaId: string) {
		return await this.mediaRepository.deleteMedia(mediaId);
	}
}
