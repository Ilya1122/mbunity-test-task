import React, { FC } from 'react';

import { ReactComponent as UserIcon } from 'assets/icons/user.svg';
import { ReactComponent as CartIcon } from 'assets/icons/cart.svg';

import HeaderLinkList from '../HeaderLinkList';

import {
  StyledNavigation,
  StyledEllipse,
  StyledWrapperEllipses,
} from './styles';

const HeaderNavigation: FC = () => (
  <StyledNavigation>
    <HeaderLinkList />

    <StyledWrapperEllipses>
      <StyledEllipse>
        <UserIcon />
      </StyledEllipse>

      <StyledEllipse>
        <CartIcon />
      </StyledEllipse>
    </StyledWrapperEllipses>
  </StyledNavigation>
);

export default HeaderNavigation;
