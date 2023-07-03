import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login></Login>,
    },
    {
        path: "/register",
        element: <Register></Register>,
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
    {
        path: "*",
        element: <PageNotFound></PageNotFound>,
    },
]);

const App = () => {
    return (
        <main>
            <div className="relative w-full h-[100%] mx-auto bg-gradient-to-br from-tertiary to-secondary">
                <RouterProvider router={router}></RouterProvider>
            </div>
            <div className="bg-primary bottom-[0px] fixed min-w-full">
                <Footer />
            </div>
        </main>
    );
};

export default App;