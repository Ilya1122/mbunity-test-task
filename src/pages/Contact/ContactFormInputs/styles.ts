import { styled } from '@mui/material/styles';

export const StyledContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: 45px 39px;

  @media (max-width: 700px) {
    gap: 20px 0;
  }
`;
