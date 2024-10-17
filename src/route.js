import Home from "@/pages/Home/Home";
import About from "@pages/About";
import Contact from "@pages/Contact";


export const publicRoutes = [
    {
        path: "/",
        Component: Home,
        name: "Home"
    },
    {
        path: "/home/about",
        Component: About,
        name: "About"
    },
    {
        path: "/home/contact",
        Component: Contact,
        name: "Contact"
    },
];
