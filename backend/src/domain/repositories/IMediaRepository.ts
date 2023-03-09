import { IMediaProps, Media } from "@domain/entities/Media";
import { IMediaListProps } from "@domain/entities/MediaList";

export default interface IMediaRepository {
	getAll: () => Promise<Media[]>;
	createMedia: (media: IMediaProps) => Promise<Media>;
	deleteMedia: (mediaId: string) => Promise<Media>;
}
