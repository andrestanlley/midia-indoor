import IMidia from "./IMidia";
import IMidiaList from "./IMidiaList";

export default interface IMidiaService {
	create: (midia: IMidia) => Promise<IMidia>;
	insertMidiaToList: (
		midiaListId: string,
		midiaId: string
	) => Promise<IMidiaList>;
	remove: (midiaId: string) => Promise<IMidia>;
}
