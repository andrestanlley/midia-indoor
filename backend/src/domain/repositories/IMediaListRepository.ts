import { IMediaProps } from "@domain/entities/Media";
import { IMediaListProps } from "@domain/entities/MediaList";

export default interface IMediaListRepository {
	getAll: () => Promise<IMediaListProps[]>;
	createMediaList: (mediaListName: string) => Promise<IMediaListProps>;
	deleteMediaList: (mediaListId: string) => Promise<IMediaListProps>;
	findMediaList: (id: string | null) => Promise<IMediaListProps | never[]>;
	insertMediaToList: (
		mediaListId: string,
		mediasToConnect: IMediaProps[],
		mediasToDisconnect: IMediaProps[]
	) => Promise<IMediaListProps>;
}
