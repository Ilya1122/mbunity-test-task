import { styled } from '@mui/material/styles';
import { RadioGroup, FormControlLabel, Radio } from '@mui/material';

export const StyledRadioGroup = styled(RadioGroup)`
  @media (max-width: 700px) {
    flex-wrap: wrap;
    gap: 14px 0;
  }
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
  color: ${({ theme }) => theme.palette.common.black};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  @media (max-width: 700px) {
    width: 45%;
  }
`;

export const StyledRadio = styled(Radio)``;
