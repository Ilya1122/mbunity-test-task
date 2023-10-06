import { styled } from '@mui/material/styles';

import Input from 'components/UI/Input';
import Button from 'components/UI/Button';
import LetterSend from 'assets/icons/letterSend.png';

export const StyledForm = styled('form')`
  width: 595px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  background-image: ${`url(${LetterSend})`};
  background-size: auto;
  background-position: 250px 430px;
  background-repeat: no-repeat;

  @media (max-width: 900px) {
    align-items: center;
  }

  @media (max-width: 700px) {
    margin-top: 30px;
    width: 100%;
    padding: 0 20px;
  }
`;

export const StyledButton = styled(Button)`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.palette.common.black};
  margin-top: 45px;
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.12);
  width: 100%;
  max-width: 214px;
  height: 54px;
  color: ${({ theme }) => theme.palette.common.white};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: inherit;

  @media (max-width: 900px) {
    margin-bottom: 60px;
  }

  @media (max-width: 700px) {
    max-width: 100%;
    margin-bottom: 63px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.grey[100]};
  }
`;

export const StyledInput = styled(Input)`
  width: 100%;
  margin-top: 45px;

  input::placeholder {
    color: ${({ theme }) => theme.palette.text.disabled};
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  & .MuiOutlinedInput-root {
    background-color: ${({ theme }) => theme.palette.grey[100]};
    border-radius: 4px 0 0 4px;
    color: ${({ theme }) => theme.palette.common.white};
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
