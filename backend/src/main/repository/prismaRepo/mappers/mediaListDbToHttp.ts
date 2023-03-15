import { IMediaListProps, MediaList } from "@domain/entities/MediaList";

export default function midiaListDbToHttp(medialist: any): IMediaListProps {
	return new MediaList({
		id: medialist.id,
		name: medialist.name,
		medias: medialist.medias,
	});
}
