import MidiaType from "../enums/midiaTypes";

export default interface IMidia {
	filename: string;
	uri?: string;
	type: MidiaType;
}
