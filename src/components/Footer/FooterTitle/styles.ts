import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const StyledContainer = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 45px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.common.white};
  margin-bottom: 30px;

  @media (max-width: 700px) {
    padding-bottom: 20px;
  }
`;

export const Logo = styled(Link)`
  font-family: 'Inter' sans-serif;
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 36px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  transition: 0.2s ease-in all;

  &:hover {
    opacity: 0.6;
  }
`;
