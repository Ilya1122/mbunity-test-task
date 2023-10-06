import React, { FC } from 'react';

import HeaderLinkList from 'components/Header/HeaderLinkList';

import { StyledNavigation } from './styles';

interface HeaderMobileLinksListProps {
  handleChangeOpen: () => void;
}

const HeaderMobileLinksList: FC<HeaderMobileLinksListProps> = ({
  handleChangeOpen,
}) => (
  <StyledNavigation onClick={handleChangeOpen}>
    <HeaderLinkList />
  </StyledNavigation>
);

export default HeaderMobileLinksList;
