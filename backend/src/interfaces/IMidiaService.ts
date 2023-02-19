import { Midia, MidiaList } from "@prisma/client";
import IMidia from "./IMidia";

export default interface IMidiaService {
	create: (midia: IMidia) => Promise<Midia>;
	insertMidiaToList: (
		midiaListId: string,
		midiaId: string
	) => Promise<
		| (MidiaList & {
				midias: Midia[];
		  })
		| undefined
	>;
	remove: (midiaId: string) => Promise<Midia>;
}
