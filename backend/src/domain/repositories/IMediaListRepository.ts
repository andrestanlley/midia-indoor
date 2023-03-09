import { IMediaProps } from "@domain/entities/Media";
import { IMediaListProps, MediaList } from "@domain/entities/MediaList";

export default interface IMediaListRepository {
	getAll: () => Promise<MediaList[]>;
	createMediaList: (mediaListName: string) => Promise<MediaList>;
	deleteMediaList: (mediaListId: string) => Promise<MediaList>;
	findMediaList: (id: string | null) => Promise<MediaList | never[]>;
	insertMediaToList: (
		mediaListId: string,
		mediasToConnect: IMediaProps[],
		mediasToDisconnect: IMediaProps[]
	) => Promise<MediaList>;
}
