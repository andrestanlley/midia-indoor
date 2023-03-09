import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Routes from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ToastContainer />
		<Routes />
	</React.StrictMode>
);
