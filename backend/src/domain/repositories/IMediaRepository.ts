import { IMediaProps, Media } from "@domain/entities/Media";
import { IMediaListProps } from "@domain/entities/MediaList";

export default interface IMediaRepository {
	getAll: () => Promise<IMediaProps[]>;
	createMedia: (media: IMediaProps) => Promise<IMediaProps>;
	deleteMedia: (mediaId: string) => Promise<IMediaProps>;
}
