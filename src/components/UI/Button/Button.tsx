import React, { FC } from 'react';
import { Button as DefaultButton, ButtonProps } from '@mui/material';

const Button: FC<ButtonProps> = ({ ...rest }) => <DefaultButton {...rest} />;

export default Button;
