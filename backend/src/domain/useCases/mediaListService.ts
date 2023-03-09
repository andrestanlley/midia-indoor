import { IMediaProps } from "@domain/entities/Media";
import { MediaList } from "@domain/entities/MediaList";
import IMediaListRepository from "@domain/repositories/IMediaListRepository";

interface IMediaListService {
	getAll: () => Promise<MediaList[]>;
	create: (midiaListName: string) => Promise<MediaList>;
	insertMediaToList: (
		mediaListId: string,
		mediasToConnect: IMediaProps[],
		mediasToDisconnect: IMediaProps[]
	) => Promise<MediaList>;
	remove: (mediaListId: string) => Promise<MediaList>;
}

class MediaListService implements IMediaListService {
	constructor(private readonly midiaListRepository: IMediaListRepository) {}

	async create(mediaListName: string) {
		console.log(mediaListName);
		return await this.midiaListRepository.createMediaList(mediaListName);
	}

	async getAll() {
		return await this.midiaListRepository.getAll();
	}

	async insertMediaToList(
		mediaListId: string,
		mediasToConnect: IMediaProps[],
		mediasToDisconnect: IMediaProps[]
	) {
		return await this.midiaListRepository.insertMediaToList(
			mediaListId,
			mediasToConnect,
			mediasToDisconnect
		);
	}

	async remove(mediaListId: string) {
		return await this.midiaListRepository.deleteMediaList(mediaListId);
	}
}

export { MediaListService, IMediaListService };
