import React, { FC } from 'react';

import { ReactComponent as PhoneIcon } from 'assets/icons/phone.svg';
import { ReactComponent as EmailIcon } from 'assets/icons/email.svg';
import { ReactComponent as LocationIcon } from 'assets/icons/location.svg';

import {
  StyledAddress,
  StyledWrapper,
  StyledLabel,
  StyledEmail,
} from './styled';

const ContactInformationAddress: FC = () => {
  return (
    <StyledAddress>
      <StyledWrapper>
        <PhoneIcon />

        <StyledLabel>+1012 3456 789</StyledLabel>
      </StyledWrapper>

      <StyledWrapper>
        <EmailIcon />

        <StyledLabel>
          <StyledEmail href="mailto:demo@gmail.com">demo@gmail.com</StyledEmail>
        </StyledLabel>
      </StyledWrapper>

      <StyledWrapper>
        <LocationIcon />

        <StyledLabel>
          132 Dartmouth Street Boston, Massachusetts 02156 United States
        </StyledLabel>
      </StyledWrapper>
    </StyledAddress>
  );
};

export default ContactInformationAddress;
