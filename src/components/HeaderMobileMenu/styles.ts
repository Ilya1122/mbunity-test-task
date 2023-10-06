import { styled } from '@mui/material/styles';

export const StyledContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  background-color: ${({ theme }) => theme?.palette?.common?.black};
  padding: 29px 20px;
`;

export const StyledWrapperIcons = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 36px;
  margin-top: 60px;

  svg {
    path {
      fill: ${({ theme }) => theme?.palette?.common?.white};
    }
  }
`;

export const StyledEllipse = styled('div')`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transition: 0.2s ease-in all;
  border: 1px solid ${({ theme }) => theme?.palette?.common?.white};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.5;
  }
`;

export const StyledWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
