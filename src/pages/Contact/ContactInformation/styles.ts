import { styled } from '@mui/material/styles';
import BackgroundElips from 'assets/icons/backgroundElips.png';

export const StyledContainer = styled('div')`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 491px;
  height: 647px;
  background-color: ${({ theme }) => theme.palette.common.black};
  border-radius: 10px 10px 0 10px;
  box-shadow: 0px 0px 60px 30px rgba(0, 0, 0, 0.03);
  background-image: ${`url(${BackgroundElips})`};
  background-size: auto;
  background-position: bottom right;
  background-repeat: no-repeat;
  margin-bottom: 10px;

  @media (max-width: 1100px) {
    width: 400px;
    padding: 20px;
  }

  @media (max-width: 900px) {
    width: 320px;
  }

  @media (max-width: 700px) {
    width: 100%;
    height: 397px;
  }
`;

export const StyledTitle = styled('h2')`
  margin: 0 0 6px 0;
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (max-width: 900px) {
    font-size: 20px;
    text-align: center;
  }
`;

export const StyledSubTitle = styled('h3')`
  margin: 0;
  color: ${({ theme }) => theme.palette.grey[400]};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 900px) {
    font-size: 11px;
    text-align: center;
  }
`;

export const StyledWrapperTitle = styled('div')`
  display: flex;
  flex-direction: column;
`;
