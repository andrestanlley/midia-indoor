import cors from "cors";

const corsOptions = {
	origin: ["https://elevamidia.com", "https://www.elevamidia.com"],
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;
