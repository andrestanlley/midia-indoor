import { IMediaProps } from "@domain/entities/Media";
import { Media } from "@prisma/client";

export default function mediaHttpToDb(media?: IMediaProps) {
	if (!media) return undefined;
	return {
		id: media.id,
		expiresIn: media.expiresIn,
		filename: media?.filename,
		uri: media?.uri,
		name: media.name,
		size: media.size,
		mediaListId: media.mediaListId,
	} as Media;
}
