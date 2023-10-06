import React, { FC } from 'react';

import ContactInformationAddress from '../ContactInformationAddress';
import ContactInformationSocialLink from '../ContactInformationSocialLink';

import {
  StyledContainer,
  StyledTitle,
  StyledSubTitle,
  StyledWrapperTitle,
} from './styles';

const ContactInformation: FC = () => (
  <StyledContainer>
    <StyledWrapperTitle>
      <StyledTitle>Contact Information</StyledTitle>
      <StyledSubTitle>Say something to start a live chat!</StyledSubTitle>
    </StyledWrapperTitle>

    <ContactInformationAddress />

    <ContactInformationSocialLink />
  </StyledContainer>
);

export default ContactInformation;
