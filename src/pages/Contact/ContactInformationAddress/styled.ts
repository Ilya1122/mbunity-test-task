import { styled } from '@mui/material/styles';

export const StyledAddress = styled('address')`
  display: flex;
  flex-direction: column;
  gap: 40px 0;

  @media (max-width: 700px) {
    align-items: center;
    margin-top: 12px;
    gap: 15px 0;
  }
`;

export const StyledWrapper = styled('div')`
  display: flex;
  align-items: center;
  gap: 0 25px;

  svg {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    gap: 10px 0;
  }
`;

export const StyledLabel = styled('span')`
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 282px;

  @media (max-width: 700px) {
    text-align: center;
  }
`;

export const StyledEmail = styled('a')`
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  transition: 0.2s ease-in all;

  &:hover {
    opacity: 0.5;
  }
`;
