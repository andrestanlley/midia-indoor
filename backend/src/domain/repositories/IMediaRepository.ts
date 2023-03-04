import { IMediaProps } from "@domain/entities/Media";
import { IMediaListProps } from "@domain/entities/MediaList";

export default interface IMediaRepository {
	getAll: () => Promise<IMediaProps[]>;
	createMedia: (midia: IMediaProps) => Promise<IMediaProps>;
	insertMediaToList: (
		midiaListId: string,
		mediasToConnect: IMediaProps[],
		mediasToDisconnect: IMediaProps[]
	) => Promise<IMediaListProps>;
	deleteMedia: (midiaId: string) => Promise<IMediaProps>;
}
