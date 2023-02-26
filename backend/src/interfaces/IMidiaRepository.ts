import IMidia from "./IMidia"
import IMidiaList from "./IMidiaList"

export default interface IMidiaRepository {
    createMidia: (midia: IMidia) => Promise<IMidia>
    insertMidiaToList: (midiaListId: string, midiaId: string) => Promise<IMidiaList>
    deleteMidia: (midiaId: string) => Promise<IMidia>
}