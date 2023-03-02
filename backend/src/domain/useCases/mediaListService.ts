import { IMediaListProps } from "@domain/entities/MediaList";
import IMediaListRepository from "@domain/repositories/IMediaListRepository";

interface IMediaListService {
	getAll: () => Promise<IMediaListProps[]>
	create: (midiaListName: string) => Promise<IMediaListProps>;
	insertMidiaToList: (
		midiaListId: string,
		midiaId: string
	) => Promise<IMediaListProps>;
	remove: (midiaListId: string) => Promise<IMediaListProps>;
}

class MediaListService implements IMediaListService {
	constructor(private readonly midiaListRepository: IMediaListRepository) {}

	async create(midiaListName: string) {
		return await this.midiaListRepository.createMidiaList(midiaListName);
	}

	async getAll(){
		return await this.midiaListRepository.getAll()
	}

	async insertMidiaToList(midiaListId: string, midiaId: string) {
		return await this.midiaListRepository.insertMidiaToList(
			midiaListId,
			midiaId
		);
	}

	async remove(midiaListId: string) {
		return await this.midiaListRepository.deleteMidiaList(midiaListId);
	}
}

export { MediaListService, IMediaListService };
