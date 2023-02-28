import { IMediaProps } from "@domain/entities/Media";
import { IMediaListProps } from "@domain/entities/MediaList";

export default interface IMidiaService {
	getAll: () => Promise<IMediaProps[]>;
	create: (midia: IMediaProps) => Promise<IMediaProps>;
	insertMidiaToList: (
		midiaListId: string,
		midiaId: string
	) => Promise<IMediaListProps>;
	remove: (midiaId: string) => Promise<IMediaProps>;
}
