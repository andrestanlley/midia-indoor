import "module-alias/register";
import { app } from "./app";

const { PORT } = process.env;

app.listen(PORT, () => {
	console.log(`running on ${PORT}`);
});
