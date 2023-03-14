import axios from "axios";

export const api = axios.create({
	baseURL: "https://elevamidia.com/api/",
	headers: {
		Authorization: "Bearer " + localStorage.getItem("token"),
	},
});
