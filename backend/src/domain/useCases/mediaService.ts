import IMediaRepository from "@domain/repositories/IMediaRepository";
import { IMediaProps } from "@domain/entities/Media";
import { IMediaListProps } from "@domain/entities/MediaList";
import fs from "fs";

interface IMediaService {
	getAll: () => Promise<IMediaProps[]>;
	create: (midia: IMediaProps) => Promise<IMediaProps>;
	insertMidiaToList: (
		midiaListId: string,
		midiaId: string
	) => Promise<IMediaListProps>;
	remove: (media: IMediaProps) => Promise<IMediaProps | undefined>;
}

class MediaService implements IMediaService {
	constructor(private readonly mediaRepository: IMediaRepository) {}

	async upload() {}

	async getAll() {
		return await this.mediaRepository.getAll();
	}

	async create(midia: IMediaProps) {
		return await this.mediaRepository.createMedia(midia);
	}

	async insertMidiaToList(midiaListId: string, mediaId: string) {
		return await this.mediaRepository.insertMidiaToList(midiaListId, mediaId);
	}

	async remove({ id, filename }: IMediaProps) {
		try {
			fs.unlinkSync("./public/videos/" + filename);
			return await this.mediaRepository.deleteMedia(id);
		} catch (error) {
			return;
		}
	}
}

export { MediaService, IMediaService };
