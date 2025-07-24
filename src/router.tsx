import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Login from "./pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: < App />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/login",
        element: <Login />
    }
])

export default router;