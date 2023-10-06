import React, { FC } from 'react';
import { NavLinkType } from 'types/link';

import { StyledUl, StyledLi, StyledTitle, StyledLink } from './styles';

interface FooterLinksListProps {
  title: string;
  links: NavLinkType[];
}

const FooterLinksList: FC<FooterLinksListProps> = ({ title, links }) => (
  <StyledUl>
    <StyledLi>
      <StyledTitle>{title}</StyledTitle>
    </StyledLi>

    {links.map(({ to, title }) => (
      <StyledLi key={title}>
        <StyledLink to={to}>{title}</StyledLink>
      </StyledLi>
    ))}
  </StyledUl>
);

export default FooterLinksList;
