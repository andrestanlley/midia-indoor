import multer from "multer";
import { randomUUID } from "node:crypto";

export const uploadVideo = multer({
	storage: multer.diskStorage({
		destination: (req, file, cb) => {
			cb(null, "./public/videos");
		},
		filename: (req, file, cb) => {
			cb(null, randomUUID() + "." + file.mimetype.split("/")[1]);
		},
	}),
	fileFilter: (req, file, cb) => {
		const extensoes = ["video/mp4"].find(
			(formatoAceito) => formatoAceito == file.mimetype
		);

		if (extensoes) {
			return cb(null, true);
		}

		return cb(null, false);
	},
});
