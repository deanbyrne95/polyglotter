import React, {useEffect, useState} from "react";
import Pusher from "pusher-js";
import axios from "./components/axios";

import "./App.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";
import {useStateValue} from "./components/StateProvider.jsx";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import PageNotFound from "./pages/PageNotFound";
// import Footer from "./components/Footer";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Login></Login>,
//     },l
//     {
//         path: "/register",
//         element: <Register></Register>,
//     },
//     {
//         path: "/login",
//         element: <Login></Login>,
//     },
//     {
//         path: "*",
//         element: <PageNotFound></PageNotFound>,
//     },
// ]);

const App = () => {
    const pusherApiKey = import.meta.env.VITE_APP_PUSHER_API_KEY;
    const [messages, setMessages] = useState([]);
    const [{user}, setUser] = useStateValue();

    useEffect(() => {
        axios.get("/messages/sync").then((res) => {
            setMessages(res.data);
        });
    }, []);

    console.log(user);

    useEffect(() => {
        const pusher = new Pusher(pusherApiKey, {
            cluster: "ap2",
        });
        const channel = pusher.subscribe("messages");
        channel.bind("inserted", (data) => {
            setMessages([...messages, data]);
        });
        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        };
    }, [messages]);
    console.log(messages);

    return (
        <main className="app">
            {/* <div className="relative w-full h-[100%] mx-auto bg-gradient-to-br from-tertiary to-secondary">
                <RouterProvider router={router}></RouterProvider>
            </div>
            <div className="bg-primary bottom-[0px] fixed min-w-full">
                <Footer />
            </div> */}
            {!user ? (
                <Login/>
            ) : (
                <div className="app__body">
                    <Sidebar messages={messages}/>
                    <Chat messages={messages}/>
                </div>
            )}
        </main>
    );
};

export default App;
