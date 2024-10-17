
import Home from "@/pages/Home/Home";
import About from "@pages/About";
import Contact from "@pages/Contact";




export const publicRoutes = [
    {
        path: HOME,
        Component: Home,
        name: "Home"
    },
    {
        path: ABOUT,
        Component: About,
        name: "/home/about"
    },
    {
        path: CONTACT,
        Component: Contact,
        name: "Contact"
    },

]