import { IMediaListProps } from "@domain/entities/MediaList";
import { MediaList } from "@prisma/client";

export default function midiaListDbToHttp(
	midiaList: MediaList
): IMediaListProps {
	return {
		id: midiaList.id,
		name: midiaList.name,
	} as IMediaListProps;
}
