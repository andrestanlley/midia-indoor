import { Media as MediaDB } from "@prisma/client";
import Links from "@main/enums/links";
import { Media } from "@domain/entities/Media";

export default function mediasDbToHttp(media: MediaDB) {
	return new Media({
		id: media.id,
		name: media.name,
		filename: media.filename,
		uri: Links.VIDEO_SERVER + media.filename,
		expiresIn: media.expiresIn,
		mediaListId: media.mediaListId ?? "",
	});
}
