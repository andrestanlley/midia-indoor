import MidiaType from "../enums/midiaTypes";

export default interface IMidia {
	id: string;
	filename: string;
	uri?: string;
	type: MidiaType;
	midiaListId: string
}
