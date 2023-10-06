import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

interface StyledLinkProps {
  isActive: boolean;
}

const baseStyles = `
  color: #1f1f1f;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  transition: 0.2s ease-in all;

  &:hover {
    opacity: 0.6;
  }
`;

export const StyledLink = styled(Link)`
  ${baseStyles}
`;

export const StyledLabel = styled('span')<StyledLinkProps>`
  display: flex;
  align-items: center;
  gap: 0 13px;
  cursor: pointer;
  ${baseStyles}
  color: ${({ isActive, theme }) =>
    isActive ? theme.palette.common.black : theme.palette.grey[200]};
  font-weight: ${({ isActive }) => (isActive ? '600' : '400')};

  @media (max-width: 700px) {
    color: ${({ isActive, theme }) =>
      isActive ? 'rgba(72, 72, 72, 0.80)' : theme.palette.common.white};
  }
`;
