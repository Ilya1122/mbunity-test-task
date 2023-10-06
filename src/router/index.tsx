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

// I import the necessary libraries and components for working with React and routing
// Set the paths to different pages of my application in a separate file path.ts
// Use the "lazy loading" technique to asynchronously load components when they are needed
// I put all pages in the Layout component to have a single layout for all pages
// If the user enters an invalid path, a NotFound component is displayed, which is also loaded asynchronously if necessary

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
