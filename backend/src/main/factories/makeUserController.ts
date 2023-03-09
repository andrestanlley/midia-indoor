import { UserController } from "@main/controllers/userController";
import { makeUserService } from "./makeUserService";

export const makeUserController = () => {
	return new UserController(makeUserService());
};
