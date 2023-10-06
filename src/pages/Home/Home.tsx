import React, { FC } from 'react';

import MainLayout from 'components/Layouts/MainLayout';

import { StyledTitle } from './styles';

const Home: FC = () => (
  <MainLayout
    title="Home Page"
    description="Any question or remarks? Just write us a message!"
  >
    <StyledTitle>Hello world!</StyledTitle>
  </MainLayout>
);

export default Home;
