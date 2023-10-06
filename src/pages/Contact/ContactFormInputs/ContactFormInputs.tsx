import React, { FC } from 'react';
import { Control, FieldErrors } from 'react-hook-form';

import { InputsType } from 'types/contacts';
import { CONTACT_INPUTS } from 'constants/contacts';
import FormInput from 'components/UI/FormInput';

import { StyledContainer } from './styles';

interface ContactFormInputsProps {
  control: Control<InputsType>;
  errors: FieldErrors<InputsType>;
}

const ContactFormInputs: FC<ContactFormInputsProps> = ({ control, errors }) => (
  <StyledContainer>
    {CONTACT_INPUTS.map(({ name, ...rest }) => (
      <FormInput
        key={name}
        control={control}
        name={name as keyof InputsType}
        error={!!errors?.[name as keyof InputsType]?.message}
        helperText={errors?.[name as keyof InputsType]?.message}
        {...rest}
      />
    ))}
  </StyledContainer>
);

export default ContactFormInputs;
