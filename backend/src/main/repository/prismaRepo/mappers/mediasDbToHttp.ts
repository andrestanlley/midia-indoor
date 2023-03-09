import { Media as MediaDB } from "@prisma/client";
import Links from "@main/enums/links";
import { IMediaProps, Media } from "@domain/entities/Media";

export default function mediasDbToHttp(media: MediaDB): IMediaProps {
	const mappedMedia = new Media({
		id: media.id,
		name: media.name,
		filename: media.filename,
		uri: Links.VIDEO_SERVER + media.filename,
		expiresIn: media.expiresIn,
		mediaListId: media.mediaListId ?? "",
	});

	return {
		id: mappedMedia.id,
		name: mappedMedia.name,
		filename: mappedMedia.filename,
		uri: Links.VIDEO_SERVER + mappedMedia.filename,
		expiresIn: mappedMedia.expiresIn,
		mediaListId: mappedMedia.mediaListId,
	};
}
