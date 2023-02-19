import express from "express";
import { makeApiRoutes } from "./factories/makeApiRoutes";

const app = express();
const apiRoutes = makeApiRoutes()

app.use(express.static("public"));
app.use(express.json());
app.use("/api", apiRoutes.router);

app.listen(3000, () => {
	console.log("running on 3000");
});
