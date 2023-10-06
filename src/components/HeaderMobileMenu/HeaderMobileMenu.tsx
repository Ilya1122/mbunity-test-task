import React, { FC } from 'react';

import { ReactComponent as UserIcon } from 'assets/icons/userWhite.svg';
import { ReactComponent as CartIcon } from 'assets/icons/cart.svg';

import HeaderMobileTitle from './HeaderMobileTitle';
import HeaderMobileLinksList from './HeaderMobileLinksList';

import { StyledContainer, StyledWrapperIcons, StyledEllipse } from './styles';

interface HeaderMobileMenuProps {
  handleChangeOpen: () => void;
}

const HeaderMobileMenu: FC<HeaderMobileMenuProps> = ({ handleChangeOpen }) => (
  <StyledContainer>
    <HeaderMobileTitle handleChangeOpen={handleChangeOpen} />

    <HeaderMobileLinksList />

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
