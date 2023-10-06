import React, { FC, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PAGES_PATH } from './path';

import Layout from 'components/Layouts/LazyLayout';

const Home = lazy(() => import('pages/Home'));
const Shop = lazy(() => import('pages/Shop'));
const Contact = lazy(() => import('pages/Contact'));
const Blog = lazy(() => import('pages/Blog'));
const About = lazy(() => import('pages/About'));
const NotFound = lazy(() => import('pages/NotFound'));

const AppRouter: FC = () => (
  <Routes>
    <Route path={PAGES_PATH.MAIN} element={<Layout />}>
      <Route index element={<Home />} />

      <Route path={PAGES_PATH.SHOP} element={<Shop />} />
      <Route path={PAGES_PATH.CONTACT} element={<Contact />} />
      <Route path={PAGES_PATH.BLOG} element={<Blog />} />
      <Route path={PAGES_PATH.ABOUT} element={<About />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default AppRouter;
