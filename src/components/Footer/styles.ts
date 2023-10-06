import { styled } from '@mui/material/styles';
import Container from 'components/Container';

export const StyledFooter = styled('footer')`
  padding: 80px 0 66px 0;
  background-color: ${({ theme }) => theme.palette.common.black};

  @media (max-width: 700px) {
    padding-top: 20px;
  }
`;

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`;
