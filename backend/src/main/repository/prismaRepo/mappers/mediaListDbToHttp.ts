import { IMediaListProps, MediaList } from "@domain/entities/MediaList";

export default function midiaListDbToHttp(medialist: any): IMediaListProps {
	const mappedMediaList = new MediaList({
		id: medialist.id,
		name: medialist.name,
		medias: medialist.medias,
	});

	return {
		id: mappedMediaList.id,
		name: mappedMediaList.name,
		medias: mappedMediaList.medias,
	}
}
