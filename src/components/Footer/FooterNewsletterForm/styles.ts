import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

import Button from 'components/UI/Button';

export const StyledForm = styled('form')`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme?.palette?.background.default};
  padding: 14px;
  width: 304px;
  height: 184px;

  @media (max-width: 1200px) {
    margin: 40px 0 0 0;
  }
`;

export const StyledTitle = styled('h3')`
  color: ${({ theme }) => theme?.palette?.common.white};
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
  margin: 0 0 29px 0;
`;

export const StyledInput = styled(TextField)`
  width: 172px;

  input::placeholder {
    color: ${({ theme }) => theme?.palette?.text.disabled};
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  & .MuiOutlinedInput-root {
    background-color: ${({ theme }) => theme?.palette?.grey[100]};
    border-radius: 4px 0 0 4px;
    color: ${({ theme }) => theme?.palette?.common.white};
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    height: 39px;

    & fieldset {
      border: none;
    }
  }

  && {
    outline: none;
  }
`;

export const StyledButton = styled(Button)`
  text-transform: inherit;
  width: 105px;
  height: 39px;
  background-color: ${({ theme }) => theme?.palette?.common.black};
  color: ${({ theme }) => theme?.palette?.common.white};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-radius: 0 4px 4px 0;
`;

export const StyledWrapper = styled('div')`
  display: flex;
  align-items: center;
`;

export const StyledDescription = styled('p')`
  color: ${({ theme }) => theme?.palette?.common.white};
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  opacity: 0.5;
  margin: 19px 0 0 0;
`;
