import IMidiaListRepository from "@domain/repositories/IMidiaListRepository";
import IMidiaListService from "../interfaces/IMidiaListService";

export class MidiaListService implements IMidiaListService {
	constructor(private readonly midiaListRepository: IMidiaListRepository) {}

	async create(midiaListName: string) {
		return await this.midiaListRepository.createMidiaList(midiaListName);
	}

	async insertMidiaToList(midiaListId: string, midiaId: string) {
		return await this.midiaListRepository.insertMidiaToList(
			midiaListId,
			midiaId
		);
	}

	async remove(midiaListId: string) {
		return await this.midiaListRepository.deleteMidiaList(midiaListId);
	}
}
