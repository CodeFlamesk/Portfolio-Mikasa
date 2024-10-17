import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '@pages/Home';

const Skills = lazy(() => import('@pages/Skills'));
const About = lazy(() => import('@pages/About'));
const Projects = lazy(() => import('@pages/project/Projects'));
const ProjectCard = lazy(() => import('@pages/project/ProjectCard'));
const Contact = lazy(() => import('@pages/Contact'));

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {/* Ось маршрути без Layout */}
                <Route path="/" element={<Home />} />
                <Route path="/home/about" element={<About />} />
                <Route path="/home/skills" element={<Skills />} />
                <Route path="/home/projects" element={<Projects />} />
                <Route path="/home/projectscard" element={<ProjectCard />} />
                <Route path="/home/contact" element={<Contact />} />
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
