import React from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '@pages/Home';

import Layout from '../Layout/Layout';

import Skills from '@pages/Skills';
import About from '@pages/About/About';


const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="skills" element={<Skills />} />
            </Route>
        </Routes>
    );

};

export default AppRouter;