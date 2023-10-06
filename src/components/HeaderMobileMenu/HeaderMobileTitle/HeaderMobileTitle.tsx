import React, { FC } from 'react';

import { PAGES_PATH } from 'router/path';
import { ReactComponent as CloseIcon } from 'assets/icons/closeIcon.svg';

import { StyledContainer, StyledIconButton, Logo } from './styles';

interface HeaderMobileTitleProps {
  handleChangeOpen: () => void;
}

const HeaderMobileTitle: FC<HeaderMobileTitleProps> = ({
  handleChangeOpen,
}) => (
  <StyledContainer>
    <Logo to={PAGES_PATH.MAIN}>Logo Here</Logo>

    <StyledIconButton onClick={handleChangeOpen}>
      <CloseIcon />
    </StyledIconButton>
  </StyledContainer>
);

export default HeaderMobileTitle;
