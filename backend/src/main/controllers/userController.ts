import { IUserService } from "@domain/useCases/userService";
import { Request, Response } from "express";

interface IUserController {
	login: (req: Request, res: Response) => Promise<Response>;
	register: (req: Request, res: Response) => Promise<Response>;
}

class UserController implements IUserController {
	constructor(private readonly userService: IUserService) {
		this.userService = userService;
	}

	login = async (req: Request, res: Response) => {
		const { name, password } = req.body;
		const token = await this.userService.login(name, password);
		if (token) return res.status(200).send({ token });
		return res.status(401).send({ message: "Credenciais invalidas." });
	};

	register = async (req: Request, res: Response) => {
		const { name, password } = req.body;
		const user = await this.userService.register(name, password);
		return res.status(200).send(user);
	};
}

export { UserController, IUserController };
