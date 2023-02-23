import IMidiaListRepository from "../interfaces/IMidiaListRepository";
import IMidiaListService from "../interfaces/IMidiaListService";

export class MidiaListService implements IMidiaListService {
	midiaListRepository: IMidiaListRepository

	constructor(midiaListRepository: IMidiaListRepository){
		this.midiaListRepository = midiaListRepository
	}

	async create(midiaListName: string) {
		return await this.midiaListRepository.createMidiaList(midiaListName);
	}

	async insertMidiaToList(midiaListId: string, midiaId: string) {
		return await this.midiaListRepository.insertMidiaToList(midiaListId, midiaId);
	}

	async remove(midiaListId: string) {
		return await this.midiaListRepository.deleteMidiaList(midiaListId);
	}
}
