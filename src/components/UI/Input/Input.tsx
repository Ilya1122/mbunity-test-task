import React, { FC, forwardRef, ReactNode, InputHTMLAttributes } from 'react';
import { TextField, TextFieldProps, TextFieldVariants } from '@mui/material';

interface InputPropsWithoutRef
  extends Omit<TextFieldProps<TextFieldVariants>, 'variant'> {
  children?: ReactNode;
}

interface InputPropsWithRef extends InputHTMLAttributes<HTMLInputElement> {}
type InputProps = InputPropsWithoutRef & InputPropsWithRef;

const Input: FC<InputProps> = forwardRef((props, ref) => (
  <TextField {...props} inputRef={ref} variant="standard" />
));

export default Input;
