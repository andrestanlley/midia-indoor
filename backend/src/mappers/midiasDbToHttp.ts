import { Midia } from "@prisma/client";
import Links from "../enums/links";
import MidiaType from "../enums/midiaTypes";

export default function midiasDbToHttp(midiaList: Midia[]) {
	return midiaList.map((midia) => {
		return {
			filename: midia.filename,
			uri: Links.VIDEO_SERVER + midia.filename,
			type: midia.type ? MidiaType.VIDEO : MidiaType.WEB,
		};
	});
}
