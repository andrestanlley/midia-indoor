import { Midia } from "@prisma/client";
import Links from "../enums/links";
import MidiaType from "../enums/midiaTypes";
import IMidia from "../interfaces/IMidia";

export default function midiasDbToHttp(midia: Midia) {
	return {
		id: midia.id,
		filename: midia.filename,
		uri: Links.VIDEO_SERVER + midia.filename,
		type: midia.type ? MidiaType.VIDEO : MidiaType.WEB,
	} as IMidia;
}
