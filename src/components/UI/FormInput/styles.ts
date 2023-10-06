import { styled } from '@mui/material/styles';
import Input from 'components/UI/Input';

export const StyledInput = styled(Input)(({ theme }) => ({
  width: '45%',
  maxWidth: '278px',

  '@media (max-width: 900px)': {
    width: '100%',
    maxWidth: '700px',
  },

  '& label.Mui-focused': {
    color: theme.palette.common.black,
  },

  '& input::placeholder': {
    color: theme.palette.text.secondary,
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '20px',
  },

  '& .MuiFormLabel-root': {
    color: theme.palette.text.secondary,
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '20px',
  },

  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.palette.grey[100],
    borderRadius: '4px 0 0 4px',
    color: theme.palette.common.black,
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '20px',
    height: '39px',
  },
}));
