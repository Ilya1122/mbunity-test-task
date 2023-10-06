/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import { Controller, Control, RegisterOptions } from 'react-hook-form';

import { InputsType } from 'types/contacts';

import { StyledInput } from './styles';

interface FormInputProps {
  name: keyof InputsType;
  control: Control<InputsType>;
  rules: RegisterOptions;
  error: boolean;
  helperText?: string;
}

const FormInput: FC<FormInputProps> = ({ name, control, rules, ...rest }) => (
  <Controller
    control={control}
    rules={rules}
    name={name}
    render={({ field }) => (
      <StyledInput
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        {...rest}
        {...field}
      />
    )}
  />
);

export default FormInput;
