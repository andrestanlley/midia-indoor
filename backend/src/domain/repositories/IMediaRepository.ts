import { IMediaProps } from "@domain/entities/Media";
import { IMediaListProps } from "@domain/entities/MediaList";
import IID from "@main/interfaces/IID";

export default interface IMediaRepository {
	getAll: () => Promise<IMediaProps[]>;
	createMedia: (midia: IMediaProps) => Promise<IMediaProps>;
	insertMediaToList: (
		midiaListId: string,
		mediasToConnect: IID[],
		mediasToDisconnect: IID[]
	) => Promise<IMediaListProps>;
	deleteMedia: (midiaId: string) => Promise<IMediaProps>;
}
