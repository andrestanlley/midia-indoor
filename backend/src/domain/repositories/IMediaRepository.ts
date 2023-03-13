import { IMediaProps } from "@domain/entities/Media";

export default interface IMediaRepository {
	getAll: () => Promise<IMediaProps[]>;
	createMedia: (media: IMediaProps) => Promise<IMediaProps>;
	update: (media: IMediaProps) => Promise<IMediaProps>;
	deleteMedia: (mediaId: string) => Promise<IMediaProps>;
}
