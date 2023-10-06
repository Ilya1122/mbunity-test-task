import { styled } from '@mui/material/styles';

export const StyledContainer = styled('div')`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 700px) {
    justify-content: center;
  }
`;

export const StyledEllipse = styled('div')`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.grey[500]};
  cursor: pointer;
  transition: 0.2s ease-in all;

  svg {
    path {
      fill: ${({ theme }) => theme.palette.common.white};
    }
    fill: ${({ theme }) => theme.palette.common.white};
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.common.white};
    svg {
      path {
        fill: ${({ theme }) => theme.palette.common.black};
      }
    }
  }
`;
