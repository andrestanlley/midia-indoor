import IMediaRepository from "@domain/repositories/IMediaRepository";
import { IMediaProps } from "@domain/entities/Media";
import { IMediaListProps } from "@domain/entities/MediaList";
import fs from "fs";
import IID from "@main/interfaces/IID";

interface IMediaService {
	getAll: () => Promise<IMediaProps[]>;
	create: (media: IMediaProps) => Promise<IMediaProps>;
	insertMediaToList: (
		mediaListId: string,
		mediasToConnect: IID[],
		mediasToDisconnect: IID[]
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

	async insertMediaToList(
		mediaListId: string,
		mediasToConnect: IID[],
		mediasToDisconnect: IID[]
	) {
		return await this.mediaRepository.insertMediaToList(
			mediaListId,
			mediasToConnect,
			mediasToDisconnect
		);
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
