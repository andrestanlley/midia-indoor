import { User } from "@domain/entities/User";
import { IUserRepository } from "@main/repository/prismaRepo/UserRepository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import 'dotenv/config'

const jwtSecret = process.env.JWTSECRET;

interface IUserService {
	register: (name: string, password: string) => Promise<string>;
	login: (name: string, password: string) => Promise<string | undefined>;
}

class UserService implements IUserService {
	constructor(private readonly userRepository: IUserRepository) {
		this.userRepository = userRepository;
	}

	async register(name: string, password: string) {
		const hashedPassword = bcrypt.hashSync(password, 10);
		const user = new User({ name, password: hashedPassword });
		const userCreated = await this.userRepository.create(user);
		return userCreated.id;
	}

	async login(name: string, password: string) {
		const user = await this.userRepository.login(name);
		if (!user) return;

		const unhashPassword = bcrypt.compareSync(password, user.password);
		if (unhashPassword) {
			return jwt.sign({ id: user.id, name: user.name }, jwtSecret!, {
				expiresIn: "8h",
			});
		}
		return;
	}
}

export { UserService, IUserService };
