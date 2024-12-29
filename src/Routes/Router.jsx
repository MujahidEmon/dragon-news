import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


    const router = createBrowserRouter([
        {
            path: '/',
            element:<Root></Root>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/Login',
                    element: <Login></Login>
                },
                {
                    path: '/Register',
                    element: <Register></Register>
                }
            ]
        }
    ])

export default router;
