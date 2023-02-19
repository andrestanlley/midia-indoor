import { prisma } from "../../services/prismaService";

export default async function insertMidiaToList(
	midiaListId: string,
	midiaId: string
) {
	const midiaList = await prisma.midiaList.findFirst({
		where: {
			id: midiaListId,
		},
		include: {
			midias: true,
		},
	});

	if (!midiaList) return;

	return await prisma.midiaList.update({
		where: {
			id: midiaList.id,
		},
		data: {
			midias: {
				connect: {
					id: midiaId,
				},
			},
		},
		include: {
			midias: true
		}
	});
}
