import React from 'react';
import { form } from 'react-validation';

// Define own Form component
const Form = ({
  getValues,
  validate,
  validateAll,
  showError,
  hideError,
  children,
  ...props
}) => <form {...props}>{children}</form>;

// Now call HOCs on components
export default form(Form);
