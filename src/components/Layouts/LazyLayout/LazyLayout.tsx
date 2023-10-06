import React, { FC, Fragment, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from 'components/Footer';
import Header from 'components/Header';

import { StyledMain } from './styles';

// Лояут для lazy лоада
const LazyLayout: FC = () => (
  <Fragment>
    <Header />

    <StyledMain>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </StyledMain>

    <Footer />
  </Fragment>
);

export default LazyLayout;
