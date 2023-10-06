import { styled } from '@mui/material/styles';

import Container from 'components/Container';

export const StyledTitle = styled('h1')`
  margin: 0 0 10px 0;
  color: ${({ theme }) => theme.palette.common.black};
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
`;

export const StyledDescription = styled('p')`
  color: ${({ theme }) => theme.palette.grey[300]};
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`;
