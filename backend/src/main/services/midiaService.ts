import IMidia from "../interfaces/IMidia";
import IMidiaRepository from "@domain/repositories/IMidiaRepository";
import IMidiaService from "../interfaces/IMidiaService";

export class MidiaService implements IMidiaService {
	constructor(private readonly midiaRepository: IMidiaRepository) {}

	async getAll() {
		return await this.midiaRepository.getAll();
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
