import { styled } from '@mui/material/styles';

import Input from 'components/UI/Input';

export const StyledInput = styled(Input)`
  width: 45%;
  max-width: 278px;

  @media (max-width: 900px) {
    width: 100%;
    max-width: 700px;
  }

  input::placeholder {
    color: ${({ theme }) => theme.palette.text.secondary};
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }

  .MuiFormLabel-root {
    color: ${({ theme }) => theme.palette.text.secondary};
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }

  & .MuiOutlinedInput-root {
    background-color: ${({ theme }) => theme.palette.grey[100]};
    border-radius: 4px 0 0 4px;
    color: ${({ theme }) => theme.palette.common.black};
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    height: 39px;
  }

  && {
    outline: none;
  }
`;
