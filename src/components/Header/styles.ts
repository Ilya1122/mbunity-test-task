import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import Container from 'components/Container';

export const StyledHeader = styled('header')`
  padding: 41px 0;

  @media (max-width: 700px) {
    padding: 28px 0;
  }
`;

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Link)`
  font-family: 'Inter' sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  color: ${({ theme }) => theme?.palette?.common?.black};
  transition: 0.2s ease-in all;

  @media (max-width: 700px) {
    font-size: 18px;
    line-height: normal;
  }

  &:hover {
    opacity: 0.6;
  }
`;
