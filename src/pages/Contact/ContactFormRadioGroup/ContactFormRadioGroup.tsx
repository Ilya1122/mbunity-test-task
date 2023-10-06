import React from 'react';

import { StyledFormControl, StyledFormLabel } from './styles';
import RadioButtons from 'components/UI/RadioButtons';

const ContactFormRadioGroup = () => {
  return (
    <StyledFormControl>
      <StyledFormLabel id="subject">Select Subject?</StyledFormLabel>

      <RadioButtons />
    </StyledFormControl>
  );
};

export default ContactFormRadioGroup;
