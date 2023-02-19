import { MidiaList } from "@prisma/client";
import IMidia from "./IMidia";

export default interface IMidiaList extends MidiaList {
	id: string;
	name: string;
	midias: IMidia[];
}
