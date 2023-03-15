import IMediaRepository from "@domain/repositories/IMediaRepository";
import { IMediaProps, Media } from "@domain/entities/Media";
import fs from "fs";

interface IMediaService {
	getAll: () => Promise<IMediaProps[]>;
	create: (media: IMediaProps) => Promise<IMediaProps>;
	update: (media: IMediaProps) => Promise<IMediaProps>;
	remove: (media: IMediaProps) => Promise<IMediaProps | undefined>;
}

class MediaService implements IMediaService {
	constructor(private readonly mediaRepository: IMediaRepository) {}

	async getAll() {
		return await this.mediaRepository.getAll();
	}

	async create(media: IMediaProps) {
		const mediaFormatted = new Media({
			...media,
			expiresIn: new Date(media.expiresIn),
		});
		return await this.mediaRepository.createMedia(mediaFormatted);
	}

	async update(media: IMediaProps) {
		return await this.mediaRepository.update(media);
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
