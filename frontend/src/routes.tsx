import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./components/Login/Index";

export default function Routes() {
	const token = localStorage.getItem('token')

	const router = createBrowserRouter([
		{
			path: "/",
			element: <div>Hello world!</div>,
		},
		{
			path: "/painel",
			element: token ? <App /> : <Login />,
		},
	]);

	return <RouterProvider router={router} />;
}
