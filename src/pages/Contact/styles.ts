import { styled } from '@mui/material/styles';

export const StyledContainer = styled('div')`
  border-radius: 10px;
  background: ${({ theme }) => theme.palette.common.white};
  box-shadow: 0px 0px 60px 30px rgba(0, 0, 0, 0.03);
  margin: 50px 0;
  padding: 10px 50px 0 10px;
  display: flex;
  gap: 0 50px;
  width: 100%;
  max-width: 1196px;

  @media (max-width: 1100px) {
    padding-right: 25px;
    gap: 0 25px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    padding: 5px;
    align-items: center;
    margin: 50px auto;
  }
`;
