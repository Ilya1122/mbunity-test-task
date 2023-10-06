import React, { FC, ReactNode, memo } from 'react';

import { StyledContainer } from './styles';
import PageTitleSection from 'components/PageTitleSection';

interface MainLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children, description, title }) => (
  <StyledContainer>
    <PageTitleSection description={description} title={title} />

    {children}
  </StyledContainer>
);

export default memo(MainLayout);
