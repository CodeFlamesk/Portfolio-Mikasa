import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '@pages/Home';
import Skills from '@pages/Skills';
import About from '@pages/About';
import Projects from '@pages/project/Projects';
import ProjectCard from '@pages/project/ProjectCard';
import Contact from '@pages/Contact';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home/about" element={<About />} />
            <Route path="/home/skills" element={<Skills />} />
            <Route path="/home/projects" element={<Projects />} />
            <Route path="/home/projectscard" element={<ProjectCard />} />
            <Route path="/home/contact" element={<Contact />} />
        </Routes>
    );
};

export default AppRouter;

