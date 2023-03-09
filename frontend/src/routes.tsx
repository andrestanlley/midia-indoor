import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./components/Login/Index";

export default function Routes() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <div>Hello world!</div>,
		},
		{
			path: "/login",
			element: <Login />,
		},
		{
			path: "/painel",
			element: <App />,
		},
	]);

	return <RouterProvider router={router} />;
}
