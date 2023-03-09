import { IUserProps } from "@domain/entities/User";
import { PrismaClient, User } from "@prisma/client";

interface IUserRepository {
	create: (user: IUserProps) => Promise<User>;
	login: (name: string) => Promise<User | null>;
}

class UserRepository implements IUserRepository {
	constructor(private readonly prisma: PrismaClient) {
		this.prisma = prisma;
	}

	async create({ id, name, password }: IUserProps) {
		const User = await this.prisma.user.create({
			data: { id: id!, name, password, active: false },
		});

		return User;
	}

	async login(name: string) {
		const user = await this.prisma.user.findFirst({
			where: {
				name,
			},
		});

		return user;
	}
}

export { UserRepository, IUserRepository };
