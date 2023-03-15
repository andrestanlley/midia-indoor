import { Media as MediaDB } from "@prisma/client";
import Links from "@main/enums/links";
import { IMediaProps, Media } from "@domain/entities/Media";

export default function mediasDbToHttp(media: MediaDB): IMediaProps {
	return new Media({
		id: media.id,
		name: media.name,
		filename: media.filename,
		uri: Links.VIDEO_SERVER + media.filename,
		expiresIn: media.expiresIn,
		size: media.size,
		mediaListId: media.mediaListId ?? "",
	});
}
