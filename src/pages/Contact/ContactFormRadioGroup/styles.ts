import { styled } from '@mui/material/styles';
import { FormControl, FormLabel } from '@mui/material';

export const StyledFormControl = styled(FormControl)`
  width: 100%;
  margin-top: 45px;

  .Mui-focused {
    color: ${({ theme }) => theme.palette.common.black};
  }
`;

export const StyledFormLabel = styled(FormLabel)`
  color: ${({ theme }) => theme.palette.common.black};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 14px;
`;
