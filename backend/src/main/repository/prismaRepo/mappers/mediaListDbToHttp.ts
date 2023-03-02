import { IMediaListProps } from "@domain/entities/MediaList";
import { MediaList } from "@prisma/client";

export default function midiaListDbToHttp(
	midiaList: any
): IMediaListProps {
	return {
		id: midiaList.id,
		name: midiaList.name,
		medias: midiaList.medias
	} as IMediaListProps;
}
