import React, { FC } from 'react';

import {
  StyledForm,
  StyledTitle,
  StyledInput,
  StyledButton,
  StyledWrapper,
  StyledDescription,
} from './styles';

const FooterNewsletterForm: FC = () => (
  <StyledForm>
    <StyledTitle>Join Our Newsletter</StyledTitle>

    <StyledWrapper>
      <StyledInput placeholder="Your email address" name="email" />
      <StyledButton>Subscribe</StyledButton>
    </StyledWrapper>

    <StyledDescription>
      * Will send you weekly updates for your <br /> better tool management.
    </StyledDescription>
  </StyledForm>
);

export default FooterNewsletterForm;
