import { styled } from '@mui/material/styles';

export const StyledUl = styled('ul')`
  display: flex;
  align-items: center;
  gap: 0 47px;
  padding: 0;
  margin: 0 60px 0 0;

  @media (max-width: 900px) {
    gap: 0 15px;
    margin-right: 20px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 30px 0;
  }
`;

export const StyledLi = styled('li')`
  @media (max-width: 700px) {
    &:nth-child(2) {
      display: none;
    }
  }
`;
