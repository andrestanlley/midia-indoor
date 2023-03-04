import { IMediaProps } from "@domain/entities/Media";
import { IMediaListProps } from "@domain/entities/MediaList";

export default interface IMediaRepository {
	getAll: () => Promise<IMediaProps[]>;
	createMedia: (midia: IMediaProps) => Promise<IMediaProps>;
	deleteMedia: (midiaId: string) => Promise<IMediaProps>;
}
