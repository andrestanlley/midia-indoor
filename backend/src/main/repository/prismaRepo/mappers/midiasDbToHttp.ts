import { Media as MediaDB } from "@prisma/client";
import Links from "@main/enums/links";
import MidiaType from "@main/enums/midiaTypes";
import { IMediaProps } from "@domain/entities/Media";

export default function midiasDbToHttp(media: MediaDB) {
	return {
		id: media.id,
		name: media.name,
		filename: media.filename,
		uri: Links.VIDEO_SERVER + media.filename,
		type: media.type ? (media.type as MidiaType) : MidiaType.VIDEO,
		mediaListId: media.mediaListId ?? undefined,
	} as IMediaProps;
}
