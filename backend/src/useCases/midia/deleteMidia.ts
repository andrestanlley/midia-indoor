import { prisma } from "../../services/prismaService";

export default async function deleteMidia(midiaId: string) {
	return await prisma.midia.delete({
		where: {
			id: midiaId,
		},
	});
}
