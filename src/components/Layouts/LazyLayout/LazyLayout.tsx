import React, { FC, Fragment, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from 'components/Footer';
import Header from 'components/Header';

import { StyledMain } from './styles';
import Loading from 'components/Loading';

// component, LazyLayout, is responsible for placing the main content of your application.
// It uses lazy loading and fragments to optimize the loading and display of components

const LazyLayout: FC = () => (
  <Fragment>
    <Header />

    <StyledMain>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </StyledMain>

    <Footer />
  </Fragment>
);

export default LazyLayout;
