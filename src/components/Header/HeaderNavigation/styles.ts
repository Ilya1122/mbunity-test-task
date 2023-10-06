import { styled } from '@mui/material/styles';

export const StyledNavigation = styled('nav')`
  display: flex;
  align-items: center;
`;

export const StyledEllipse = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 31px;
  height: 31px;
  border: 1px solid ${({ theme }) => theme?.palette?.common?.black};
  transition: 0.2s ease-in all;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

export const StyledWrapperEllipses = styled('div')`
  display: flex;
  align-items: center;
  gap: 0 36px;

  @media (max-width: 900px) {
    gap: 0 15px;
  }
`;
