import React, { FC } from 'react';

import { PAGES_PATH } from 'router/path';

import { StyledContainer, Logo } from './styles';

const FooterTitle: FC = () => {
  return (
    <StyledContainer>
      <Logo to={PAGES_PATH.MAIN}>Logo Here</Logo>
    </StyledContainer>
  );
};

export default FooterTitle;
