import IMidia from "../interfaces/IMidia";
import IMidiaRepository from "../interfaces/IMidiaRepository";
import IMidiaService from "../interfaces/IMidiaService";

export class MidiaService implements IMidiaService {
	midiaRepository: IMidiaRepository;

	constructor(midiaRepository: IMidiaRepository) {
		this.midiaRepository = midiaRepository;
	}

	async create(midia: IMidia) {
		return await this.midiaRepository.createMidia(midia);
	}

	async insertMidiaToList(midiaListId: string, midiaId: string) {
		return await this.midiaRepository.insertMidiaToList(midiaListId, midiaId);
	}

	async remove(midiaId: string) {
		return await this.midiaRepository.deleteMidia(midiaId);
	}
}
