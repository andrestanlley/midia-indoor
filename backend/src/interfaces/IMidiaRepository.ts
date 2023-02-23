import IMidia from "./IMidia"

export default interface IMidiaRepository {
    createMidia: (midia: IMidia) => Promise<IMidia[]>
    insertMidiaToList: (midiaListId: string, midiaId: string) => Promise<IMidia[]>
    deleteMidia: (midiaId: string) => Promise<IMidia[]>
}