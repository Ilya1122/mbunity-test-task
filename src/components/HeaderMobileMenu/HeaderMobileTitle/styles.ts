import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledIconButton = styled(IconButton)`
  svg {
    transition: 0.2s ease-in all;

    &:hover {
      opacity: 0.6;
    }
  }
`;

export const StyledContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Logo = styled(Link)`
  color: ${({ theme }) => theme?.palette?.common?.white};
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  transition: 0.2s ease-in all;

  &:hover {
    opacity: 0.6;
  }
`;
