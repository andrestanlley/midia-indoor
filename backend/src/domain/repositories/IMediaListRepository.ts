import { IMediaListProps } from "@domain/entities/MediaList";

export default interface IMediaListRepository {
	getAll: () => Promise<IMediaListProps[]>;
	createMidiaList: (midiaListName: string) => Promise<IMediaListProps>;
	deleteMidiaList: (midiaListId: string) => Promise<IMediaListProps>;
	findMediaList: (id: string | null) => Promise<IMediaListProps | never[]>;
	insertMidiaToList: (
		midiaListId: string,
		midiaId: string
	) => Promise<IMediaListProps>;
}
