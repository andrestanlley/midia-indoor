import IMidia from "./IMidia";

export default interface ISyncResponse {
	status?: number;
	download?: IMidia[];
	delete?: IMidia[];
}
