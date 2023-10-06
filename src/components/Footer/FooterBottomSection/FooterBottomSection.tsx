import React, { FC } from 'react';

import FooterReachUs from '../FooterReachUs';
import FooterNavigation from '../FooterNavigation';
import FooterNewsletterForm from '../FooterNewsletterForm';

import { StyledContainer } from './styles';

const FooterBottomSection: FC = () => (
  <StyledContainer>
    <FooterReachUs />

    <FooterNavigation />

    <FooterNewsletterForm />
  </StyledContainer>
);

export default FooterBottomSection;
