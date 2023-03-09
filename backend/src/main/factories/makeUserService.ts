import { UserService } from "@domain/useCases/userService";
import { makeUserRepository } from "./makeUserRepository";

export const makeUserService = () => {
	return new UserService(makeUserRepository());
};
