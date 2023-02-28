import express, { Request, Response } from "express";
import cors from "cors";
import { apiRoutes } from "./main/routes/api";

const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use("/api", apiRoutes);

export { app };
