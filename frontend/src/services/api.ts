import axios from "axios";

const token = "Bearer " + localStorage.getItem("token");

export const api = axios.create({
	baseURL: "https://elevamidia.com/api/",
	headers: {
		Authorization: token,
	},
});
