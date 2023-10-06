import React, { FC } from 'react';

import FooterLinksList from '../FooterLinksList';
import {
  FOOTER_NAV_LINKS_COMPANY,
  FOOTER_NAV_LINKS_LEGAL,
  FOOTER_NAV_LINKS_QUICK,
} from 'constants/footer';

import { StyledNavigation } from './styles';

const FooterNavigation: FC = () => (
  <StyledNavigation>
    <FooterLinksList links={FOOTER_NAV_LINKS_COMPANY} title="Company" />
    <FooterLinksList links={FOOTER_NAV_LINKS_LEGAL} title="Legal" />
    <FooterLinksList links={FOOTER_NAV_LINKS_QUICK} title="Quick Links" />
  </StyledNavigation>
);

export default FooterNavigation;
