import React, { FC } from 'react';

import { ReactComponent as UserIcon } from 'assets/icons/userWhite.svg';
import { ReactComponent as CartIcon } from 'assets/icons/cart.svg';

import HeaderMobileTitle from './HeaderMobileTitle';
import HeaderMobileLinksList from './HeaderMobileLinksList';

import {
  StyledContainer,
  StyledWrapperIcons,
  StyledEllipse,
  StyledWrapper,
} from './styles';

interface HeaderMobileMenuProps {
  handleChangeOpen: () => void;
}

const HeaderMobileMenu: FC<HeaderMobileMenuProps> = ({ handleChangeOpen }) => (
  <StyledContainer>
    <StyledWrapper>
      <HeaderMobileTitle handleChangeOpen={handleChangeOpen} />

      <HeaderMobileLinksList handleChangeOpen={handleChangeOpen} />
    </StyledWrapper>

    <StyledWrapperIcons>
      <StyledEllipse>
        <UserIcon />
      </StyledEllipse>

      <StyledEllipse>
        <CartIcon />
      </StyledEllipse>
    </StyledWrapperIcons>
  </StyledContainer>
);

export default HeaderMobileMenu;
