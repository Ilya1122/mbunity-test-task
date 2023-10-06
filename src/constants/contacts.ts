import { REQUIRED_MESSAGE, PATTERN_EMAIL_MESSAGE } from './errors-message';
import { PATTERN_EMAIL } from './patterns';

export const INPUTS_DEFAULT_VALUE = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
};

export const InputsRules = {
  required: {
    value: true,
    message: REQUIRED_MESSAGE,
  },
  patternEmail: {
    value: PATTERN_EMAIL,
    message: PATTERN_EMAIL_MESSAGE,
  },
};

export const CONTACT_INPUTS = [
  {
    name: 'firstName',
    placeholder: 'Ilia',
    label: 'First Name',
    rules: {
      required: InputsRules.required,
    },
  },
  {
    name: 'lastName',
    placeholder: 'Rudiuk',
    label: 'Last Name',
    rules: {
      required: InputsRules.required,
    },
  },
  {
    name: 'email',
    placeholder: 'demo@gmail.com',
    label: 'Email',
    rules: {
      required: InputsRules.required,
      pattern: InputsRules.patternEmail,
    },
  },
  {
    name: 'phone',
    placeholder: '+1 012 3456 789',
    label: 'Phone',
    type: 'number',
    rules: {
      required: InputsRules.required,
    },
  },
];
