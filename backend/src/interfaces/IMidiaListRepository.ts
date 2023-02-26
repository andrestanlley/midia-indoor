import IMidia from "./IMidia";
import IMidiaList from "./IMidiaList";

export default interface IMidiaListRepository {
	createMidiaList: (midiaListName: string) => Promise<IMidiaList>;
	deleteMidiaList: (midiaListId: string) => Promise<IMidiaList>;
	findMidiaList: (id: string | null) => Promise<IMidiaList | never[]>;
	insertMidiaToList: (
		midiaListId: string,
		midiaId: string
	) => Promise<IMidiaList>;
}
