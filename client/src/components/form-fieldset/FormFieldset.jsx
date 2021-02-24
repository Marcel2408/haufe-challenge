/* eslint-disable react/prop-types */
import React from 'react';
import { Field } from 'redux-form';
import './FormFieldset.scss';

const FormFieldset = ({ label, name, type }) => {
  return (
    <fieldset className="fieldset">
      <label className="fieldset__label" htmlFor={name}>
        {label}
      </label>
      <Field
        className="fieldset__input"
        name={name}
        type={type}
        component="input"
        autoComplete="none"
        required
      />
    </fieldset>
  );
};

export default FormFieldset;
