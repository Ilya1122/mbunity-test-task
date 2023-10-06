import React, { FC } from 'react';

import MainLayout from 'components/Layouts/MainLayout';

import ContactInformation from './ContactInformation';
import ContactForm from './ContactForm';

import { StyledContainer } from './styles';

const Contact: FC = () => (
  <MainLayout
    title="Contact Us"
    description="Any question or remarks? Just write us a message!"
  >
    <StyledContainer>
      <ContactInformation />

      <ContactForm />
    </StyledContainer>
  </MainLayout>
);

export default Contact;
