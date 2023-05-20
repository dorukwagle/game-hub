import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/HomePage";
import Layout from "./pages/Layout";
import GameDetailPage from "./pages/GameDetailPage";
import ErrorPage from "./pages/ErrorPage";

const route = createBrowserRouter([
    {
        path: "/", element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {index: true, element: <Home />},
            {path: "games/:slug", element: <GameDetailPage />}
        ]
    }
]);

export default route;   