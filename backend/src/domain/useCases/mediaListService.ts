import { IMediaProps } from "@domain/entities/Media";
import { IMediaListProps } from "@domain/entities/MediaList";
import IMediaListRepository from "@domain/repositories/IMediaListRepository";

interface IMediaListService {
	getAll: () => Promise<IMediaListProps[]>;
	create: (midiaListName: string) => Promise<IMediaListProps>;
	insertMediaToList: (
		mediaListId: string,
		mediasToConnect: IMediaProps[],
		mediasToDisconnect: IMediaProps[]
	) => Promise<IMediaListProps>;
	remove: (mediaListId: string) => Promise<IMediaListProps>;
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
