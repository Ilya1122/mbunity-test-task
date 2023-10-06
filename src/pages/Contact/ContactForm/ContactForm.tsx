/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { InputsType } from 'types/contacts';
import { INPUTS_DEFAULT_VALUE } from 'constants/contacts';

import ContactFormInputs from '../ContactFormInputs';
import ContactFormRadioGroup from '../ContactFormRadioGroup';

import { StyledForm, StyledInput, StyledButton } from './styles';

const ContactForm: FC = () => {
  const formState = useForm<InputsType>({
    defaultValues: INPUTS_DEFAULT_VALUE,
    mode: 'all',
  });

  const onSubmit: SubmitHandler<InputsType> = (values) => {
    console.log('values', values);
  };

  return (
    <StyledForm>
      <ContactFormInputs
        control={formState.control}
        errors={formState.formState.errors}
      />

      <ContactFormRadioGroup />

      <StyledInput
        label="Message"
        placeholder="Write your message..."
        InputLabelProps={{
          shrink: true,
        }}
      />

      <StyledButton onClick={formState.handleSubmit(onSubmit)}>
        Send Message
      </StyledButton>
    </StyledForm>
  );
};

export default ContactForm;
