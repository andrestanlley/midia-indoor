import IMidiaList from "./IMidiaList";

export default interface IMidiaListService {
	create: (midiaListName: string) => Promise<IMidiaList>;
	insertMidiaToList: (
		midiaListId: string,
		midiaId: string
	) => Promise<IMidiaList>;
	remove: (midiaListId: string) => Promise<IMidiaList>;
}
