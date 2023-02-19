import { Midia } from "@prisma/client";
import MidiaType from "../enums/midiaTypes";

export default interface IMidia extends Midia {
	filename: string;
	uri: string;
	type: MidiaType;
}
