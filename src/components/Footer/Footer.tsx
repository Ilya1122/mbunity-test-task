import React, { FC } from 'react';

import FooterTitle from './FooterTitle';
import FooterBottomSection from './FooterBottomSection';

import { StyledFooter, StyledContainer } from './styles';

const Footer: FC = () => (
  <StyledFooter>
    <StyledContainer>
      <FooterTitle />

      <FooterBottomSection />
    </StyledContainer>
  </StyledFooter>
);

export default Footer;
