import { Midia } from "@prisma/client";
import Links from "@main/enums/links";
import MidiaType from "@main/enums/midiaTypes";
import IMidia from "@main/interfaces/IMidia";

export default function midiasDbToHttp(midia: Midia) {
	return {
		id: midia.id,
		filename: midia.filename,
		uri: Links.VIDEO_SERVER + midia.filename,
		type: midia.type ? MidiaType.VIDEO : MidiaType.WEB,
	} as IMidia;
}
