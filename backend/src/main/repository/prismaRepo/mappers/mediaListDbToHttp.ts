import { IMediaListProps, MediaList } from "@domain/entities/MediaList";

export default function midiaListDbToHttp(medialist: any): IMediaListProps {
	const mediaListMapped = new MediaList({
		id: medialist.id,
		name: medialist.name,
		medias: medialist.medias,
	});

	return {
		id: mediaListMapped.id,
		name: mediaListMapped.name,
		medias: mediaListMapped.medias,
	};
}
