import React from 'react';
import { control } from 'react-validation';

// Define own Input component
const Input = ({ error, isChanged, isUsed, iconClass, ...props }) => (
  <div className="form-group has-icon">
    <i className={iconClass} />
    <input {...props} />
    {isChanged && isUsed && error}
  </div>
);

// Now call HOCs on components
export default control(Input);
