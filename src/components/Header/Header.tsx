import React, { FC } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

import { PAGES_PATH } from 'router/path';
import HeaderNavigation from './HeaderNavigation';

import { StyledHeader, StyledContainer, Logo } from './styles';
import HeaderMenu from './HeaderMenu';

const Header: FC = () => {
  const isMobile = useMediaQuery('(max-width:700px)');

  return (
    <StyledHeader>
      <StyledContainer>
        <Logo to={PAGES_PATH.MAIN}>Logo Here</Logo>

        {isMobile ? <HeaderMenu /> : <HeaderNavigation />}
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
