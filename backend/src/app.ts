import express, { Request, Response } from "express";
import cors from "cors";
import { apiRoutes } from "./main/routes/api";

const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use("/api", apiRoutes);
app.use("/", (req: Request, res: Response) => {
	return res.status(200).send({ status: "ok" });
});

export { app };
