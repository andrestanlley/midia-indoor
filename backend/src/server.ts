import express from "express";
import api from "./routes/api";

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use("/api", api);

app.listen(3000, () => {
	console.log("running on 3000");
});
