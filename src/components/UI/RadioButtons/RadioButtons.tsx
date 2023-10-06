import React, { FC } from 'react';

import { ReactComponent as RadioIcon } from 'assets/icons/radioIcon.svg';
import { ReactComponent as RadioCheckedIcon } from 'assets/icons/radioCheckedIcon.svg';

import {
  StyledRadioGroup,
  StyledFormControlLabel,
  StyledRadio,
} from './styles';

const RadioButtons: FC = () => (
  <StyledRadioGroup row id="subject">
    <StyledFormControlLabel
      value="inquiry1"
      control={
        <StyledRadio icon={<RadioIcon />} checkedIcon={<RadioCheckedIcon />} />
      }
      label="General"
    />

    <StyledFormControlLabel
      value="inquiry2"
      control={
        <StyledRadio icon={<RadioIcon />} checkedIcon={<RadioCheckedIcon />} />
      }
      label="General"
    />

    <StyledFormControlLabel
      value="inquiry3"
      control={
        <StyledRadio icon={<RadioIcon />} checkedIcon={<RadioCheckedIcon />} />
      }
      label="General"
    />

    <StyledFormControlLabel
      value="inquiry4"
      control={
        <StyledRadio icon={<RadioIcon />} checkedIcon={<RadioCheckedIcon />} />
      }
      label="General"
    />
  </StyledRadioGroup>
);

export default RadioButtons;
