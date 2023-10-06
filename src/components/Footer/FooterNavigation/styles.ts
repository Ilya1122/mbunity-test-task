import { styled } from '@mui/material/styles';

export const StyledNavigation = styled('nav')`
  display: flex;
  gap: 0 60px;

  @media (max-width: 900px) {
    margin-top: 30px;
  }

  @media (max-width: 700px) {
    margin-top: 30px;

    gap: 0 20px;
  }
`;
