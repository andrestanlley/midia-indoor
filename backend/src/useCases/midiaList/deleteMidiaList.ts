import { prisma } from "../../services/prismaService";

export default async function deleteMidiaList(midiaListId: string) {
	return await prisma.midiaList.delete({
		where: {
			id: midiaListId,
		},
	});
}
