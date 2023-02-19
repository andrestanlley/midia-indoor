import midiaListDbToHttp from "../../mappers/midiaListDbToHttp";
import { prisma } from "../../services/prismaService";

export default async function findMidiaList(id: string | null) {
	if(!id) return []
	const midiaList = await prisma.midiaList.findFirst({
		where: {
			id,
		},
		select: {
			midias: true,
		},
	});
	if (!midiaList || !midiaList.midias.length) return [];
	return midiaListDbToHttp(midiaList.midias);
}
