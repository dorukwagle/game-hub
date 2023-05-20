import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/HomePage";
import Layout from "./pages/Layout";
import GameDetailPage from "./pages/GameDetailPage";

const route = createBrowserRouter([
    {
        path: "/", element: <Layout />,
        children: [
            {index: true, element: <Home />},
            {path: "games/:id", element: <GameDetailPage />}
        ]
    }
]);

export default route;   