import Home from "@/pages/Home/Home";
import About from "@pages/About";
import Skills from "@pages/Skills";
import Projects from "@pages/project/Projects";
import ProjectCard from "@pages/project/ProjectCard";
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
        path: "/home/skills",
        Component: Skills,
        name: "Skills"
    },
    {
        path: "/home/projects",
        Component: Projects,
        name: "Projects" // 
    },
    {
        path: "/home/projectscard",
        Component: ProjectCard,
        name: "Project Card"
    },
    {
        path: "/home/contact",
        Component: Contact,
        name: "Contact"
    },
];
