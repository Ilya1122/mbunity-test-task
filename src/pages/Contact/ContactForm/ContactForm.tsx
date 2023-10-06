import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { InputsType } from 'types/contacts';
import { INPUTS_DEFAULT_VALUE } from 'constants/contacts';

import ContactFormInputs from '../ContactFormInputs';
import ContactFormRadioGroup from '../ContactFormRadioGroup';

import { StyledForm, StyledInput, StyledButton } from './styles';

// The react-hook-form library is used to create the form and handle its state
// Input field types and their default values are defined according to InputsType and INPUTS_DEFAULT_VALUE.
// StyledForm, StyledInput, and StyledButton styled components are used to create the appropriate appearance of the form.

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
