import React, { FC, memo } from 'react';

import { HEADER_NAV_LINKS } from 'constants/header';
import HeaderLink from '../HeaderLink';

import { StyledUl, StyledLi } from './styles';

const HeaderLinkList: FC = () => (
  <StyledUl>
    {HEADER_NAV_LINKS.map((link) => (
      <StyledLi key={link.title}>
        <HeaderLink {...link} />
      </StyledLi>
    ))}
  </StyledUl>
);

export default memo(HeaderLinkList);
