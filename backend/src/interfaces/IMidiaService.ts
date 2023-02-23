import IMidia from "./IMidia";

export default interface IMidiaService {
	create: (midia: IMidia) => Promise<IMidia[]>;
	insertMidiaToList: (
		midiaListId: string,
		midiaId: string
	) => Promise<IMidia[]>;
	remove: (midiaId: string) => Promise<IMidia[]>;
}
