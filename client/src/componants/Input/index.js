/* eslint-disable react/prop-types */
import React from 'react';
import './style.css';

const Input = ({
  type,
  placeholder,
  label,
  value,
  handleInputChange,
  name,
}) => (
  <>
    <label htmlFor={name}>
      {label}
      <input
        type={type}
        placeholder={placeholder}
        defaultValue={value}
        onChange={handleInputChange}
        name={name}
      />
    </label>
  </>
);
export default Input;
