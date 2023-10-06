import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.palette.grey[200]};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const StyledLabel = styled('span')`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.grey[200]};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
