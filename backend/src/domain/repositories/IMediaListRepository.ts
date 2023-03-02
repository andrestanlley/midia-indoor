import { IMediaListProps } from "@domain/entities/MediaList";

export default interface IMediaListRepository {
	getAll: () => Promise<IMediaListProps[]>;
	createMediaList: (mediaListName: string) => Promise<IMediaListProps>;
	deleteMediaList: (mediaListId: string) => Promise<IMediaListProps>;
	findMediaList: (id: string | null) => Promise<IMediaListProps | never[]>;
	insertMediaToList: (
		mediaListId: string,
		midiaId: string
	) => Promise<IMediaListProps>;
}
