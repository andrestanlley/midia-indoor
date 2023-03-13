import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Landing from "./components/Landing/Index";
import Login from "./components/Login/Index";

export default function Routes() {
	const token = localStorage.getItem("token");

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Landing />,
		},
		{
			path: "/painel",
			element: token ? <App /> : <Login />,
		},
	]);

	return <RouterProvider router={router} />;
}
