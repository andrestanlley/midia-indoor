import { MediaList } from "@domain/entities/MediaList";

export default function midiaListDbToHttp(medialist: any): MediaList {
	return new MediaList({
		id: medialist.id,
		name: medialist.name,
		medias: medialist.medias,
	});
}
