import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const StyledUl = styled('ul')`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  gap: 24px 0;
`;

export const StyledLi = styled('li')``;

export const StyledTitle = styled('h3')`
  color: ${({ theme }) => theme?.palette?.common?.white};
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
  margin: 0;
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme?.palette?.common?.white};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  transition: 0.2s ease-in all;

  &:hover {
    opacity: 0.6;
  }
`;
