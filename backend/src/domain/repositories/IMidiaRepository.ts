import IMidia from "@main/interfaces/IMidia";
import IMidiaList from "@main/interfaces/IMidiaList";

export default interface IMidiaRepository {
	getAll: () => Promise<IMidia[]>;
	createMidia: (midia: IMidia) => Promise<IMidia>;
	insertMidiaToList: (
		midiaListId: string,
		midiaId: string
	) => Promise<IMidiaList>;
	deleteMidia: (midiaId: string) => Promise<IMidia>;
}
