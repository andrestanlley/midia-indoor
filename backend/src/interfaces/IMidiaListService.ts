import { Midia, MidiaList } from "@prisma/client";

export default interface IMidiaListService {
	create: (midiaListName: string) => Promise<MidiaList>;
	insertMidiaToList: (
		midiaListId: string,
		midiaId: string
	) => Promise<
		| (MidiaList & {
				midias: Midia[];
		  })
		| undefined
	>;
	remove: (midiaListId: string) => Promise<MidiaList>;
}
