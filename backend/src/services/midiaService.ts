import IMidia from "../interfaces/IMidia";
import IMidiaService from "../interfaces/IMidiaService";
import createMidia from "../useCases/midia/createMidia";
import deleteMidia from "../useCases/midia/deleteMidia";
import insertMidiaToList from "../useCases/midiaList/insertMidiaToList";

export class MidiaService implements IMidiaService {
	async create(midia: IMidia) {
		return await createMidia(midia);
	}

	async insertMidiaToList(midiaListId: string, midiaId: string) {
		return await insertMidiaToList(midiaListId, midiaId);
	}

	async remove(midiaId: string) {
		return await deleteMidia(midiaId);
	}
}
