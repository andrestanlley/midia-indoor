import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import "dotenv/config";

const jwtSecret = process.env.JWTSECRET;

interface IUserJWT extends JwtPayload {
	active: boolean;
}

export const login = (req: Request, res: Response, next: NextFunction) => {
	try {
		const token = req.headers.authorization?.split("Bearer ")[1];
		if(!token) throw new Error()
		const user = jwt.verify(token!, jwtSecret!) as IUserJWT;
		if (token && user && user.active) next();
	} catch (error) {
		return res.status(401).send({ message: "Não autorizado." });
	}
};
