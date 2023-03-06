import IMediaRepository from "@domain/repositories/IMediaRepository";
import { IMediaProps } from "@domain/entities/Media";
import { IMediaListProps } from "@domain/entities/MediaList";
import fs from "fs";

interface IMediaService {
	getAll: () => Promise<IMediaProps[]>;
	create: (media: IMediaProps) => Promise<IMediaProps>;
	remove: (media: IMediaProps) => Promise<IMediaProps | undefined>;
}

class MediaService implements IMediaService {
	constructor(private readonly mediaRepository: IMediaRepository) {}

	async getAll() {
		return await this.mediaRepository.getAll();
	}

	async create(media: IMediaProps) {
		const mediaFormatted = { ...media, expiresIn: new Date(media.expiresIn) };
		return await this.mediaRepository.createMedia(mediaFormatted);
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
