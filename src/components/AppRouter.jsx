import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '@pages/home/Home';
import Layout from '../Layout/Layout';
import ErrorPage from '@pages/ErrorPage';
import EpisodeSinglePage from '@pages/EpisodeSinglePage';
import EpisodePage from '@pages/EpisodePage';
import ContactPage from '@pages/ContactPage';
import BlogPage from '@pages/BlogPage';
import BlogHeadphonesPage from '@pages/BlogHeadphonesPage';
import BlogCakePage from '@pages/BlogCakePage';
import BlogClockPage from '@pages/BlogClockPage';
import PrivacyPolicyPage from '@pages/PrivacyPolicyPage';
import AboutPage from '@pages/AboutPage';
import DonatePage from '@pages/DonatePage';
import EpisodeSecondPage from '@pages/EpisodeSecondPage';
import EpisodeThirdPage from '@pages/EpisodeThirdPage';
const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/error-404' element={<ErrorPage />} />
                <Route path='/episode/season' element={<EpisodeSinglePage />} />
                <Route path='/episode' element={<EpisodePage />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/blog' element={<BlogPage />} />
                <Route path='/blog-create-art' element={<BlogHeadphonesPage />} />
                <Route path='/blog-time-page' element={<BlogClockPage />} />
                <Route path='/blog-health-page' element={<BlogCakePage />} />
                <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/donate' element={<DonatePage />} />
                <Route path='/podcast-second' element={<EpisodeSecondPage />} />
                <Route path='/podcast-third' element={<EpisodeThirdPage />} />
                
            </Route>

        </Routes>
    );
};

export default AppRouter;