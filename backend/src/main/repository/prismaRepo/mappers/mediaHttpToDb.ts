import { IMediaProps } from "@domain/entities/Media";
import { Media } from "@prisma/client";

export default function midiaHttpToDb(media?: IMediaProps) {
	if (!media) return undefined;
	return {
		id: media.id,
		expiresIn: media.expiresIn,
		filename: media?.filename,
		uri: media?.uri,
		name: media.name,
		mediaListId: media.mediaListId,
	} as Media;
}
