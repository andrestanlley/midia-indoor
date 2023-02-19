import createMidiaList from "../useCases/midiaList/createMidiaList";
import insertMidiaToList from "../useCases/midiaList/insertMidiaToList";
import deleteMidiaList from "../useCases/midiaList/deleteMidiaList";
import IMidiaListService from "../interfaces/IMidiaListService";

export class MidiaListService implements IMidiaListService {
	async create(midiaListName: string) {
		return await createMidiaList(midiaListName);
	}

	async insertMidiaToList(midiaListId: string, midiaId: string) {
		return await insertMidiaToList(midiaListId, midiaId);
	}

	async remove(midiaListId: string) {
		return await deleteMidiaList(midiaListId);
	}
}
