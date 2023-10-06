import { styled } from '@mui/material/styles';

export const StyledAddress = styled('address')`
  display: flex;
  flex-direction: column;
  gap: 24px 0;
`;

export const StyledTitle = styled('h3')`
  color: ${({ theme }) => theme?.palette?.common?.white};
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
  margin: 0;
`;

export const StyledWrapper = styled('div')`
  display: flex;
  align-items: center;
  gap: 0 25px;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const StyledLabel = styled('span')`
  color: ${({ theme }) => theme?.palette?.common?.white};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 282px;
`;

export const StyledEmail = styled('a')`
  color: ${({ theme }) => theme?.palette?.common?.white};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
