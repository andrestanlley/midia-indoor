import { makeUserController } from "@main/factories/makeUserController";
import { Router } from "express";
export const userRoutes = Router();

const { login, register } = makeUserController();

userRoutes.post("/login", login);
userRoutes.post("/register", register);
