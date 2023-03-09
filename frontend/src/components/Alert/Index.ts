import { toast } from "react-toastify";

export const sucess = (msg: string) =>
	toast(msg, {
		position: "bottom-right",
		style: {
			background: "var(--verde)",
			color: "#ffffff",
		},
		hideProgressBar: true,
	});

export const error = (msg: string) =>
	toast(msg, {
		position: "bottom-right",
		style: {
			background: "var(--vermelho)",
			color: "#ffffff",
		},
		hideProgressBar: true,
	});
