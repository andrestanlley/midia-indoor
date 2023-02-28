import { IMediaProps } from "@domain/entities/Media";
import { Media } from "@prisma/client";
import { randomUUID } from "node:crypto";

export default function midiaHttpToDb(media?: IMediaProps) {
	if (!media) return undefined;
	return {
		id: media.id,
		filename: media?.filename,
		uri: media?.uri,
		type: media?.type,
		name: media.name,
		mediaListId: media.mediaListId,
	} as Media;
}
