import React from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '@pages/Home/Home';

import Layout from '../Layout/Layout';


const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />


            </Route>

        </Routes>
    );
};

export default AppRouter;