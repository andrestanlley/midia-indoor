import IMidia from "../interfaces/IMidia";
import { randomUUID } from "node:crypto";

export default function midiaHttpToDb(midia: IMidia, midiaListId: string) {
	return {
		id: randomUUID(),
		filename: midia.filename,
		uri: midia.uri,
		type: midia.type,
		midiaListId,
	};
}
