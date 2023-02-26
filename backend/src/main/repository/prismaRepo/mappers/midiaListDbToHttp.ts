import { MidiaList } from "@prisma/client";
import IMidiaList from "@main/interfaces/IMidiaList";

export default function midiaListDbToHttp(midiaList: MidiaList): IMidiaList{
    return {
        id: midiaList.id,
        name: midiaList.name,
    }
}