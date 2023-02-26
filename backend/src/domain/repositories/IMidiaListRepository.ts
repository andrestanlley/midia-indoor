import IMidia from "@main/interfaces/IMidia";
import IMidiaList from "@main/interfaces/IMidiaList";

export default interface IMidiaListRepository {
	createMidiaList: (midiaListName: string) => Promise<IMidiaList>;
	deleteMidiaList: (midiaListId: string) => Promise<IMidiaList>;
	findMidiaList: (id: string | null) => Promise<IMidiaList | never[]>;
	insertMidiaToList: (
		midiaListId: string,
		midiaId: string
	) => Promise<IMidiaList>;
}
