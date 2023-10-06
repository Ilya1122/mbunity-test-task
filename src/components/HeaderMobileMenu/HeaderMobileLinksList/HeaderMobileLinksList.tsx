import React, { FC } from 'react';

import HeaderLinkList from 'components/Header/HeaderLinkList';

import { StyledNavigation } from './styles';

const HeaderMobileLinksList: FC = () => (
  <StyledNavigation>
    <HeaderLinkList />
  </StyledNavigation>
);

export default HeaderMobileLinksList;
