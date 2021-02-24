/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { reduxForm } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';
import { signup, deleteError } from '../../redux/auth/auth.actions';
import './Signup.scss';
import FormFieldset from '../form-fieldset/FormFieldset';

const Signup = ({ handleSubmit, history }) => {
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const dispatch = useDispatch();

  const onSubmit = (formProps) => {
    dispatch(
      signup(formProps, (path) => {
        history.push(path);
      })
    );
  };

  useEffect(() => {
    if (errorMessage) {
      dispatch(deleteError());
    }
  }, []);

  return (
    <div className="signup">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="form__title">Sign Up</h1>
        <div className="form__fieldset-wrapper">
          <FormFieldset label="Name" name="name" type="text" />
          <FormFieldset label="Email" name="email" type="email" />
          <FormFieldset label="Password" name="password" type="password" />
          <FormFieldset label="Confirm Password" name="passwordConfirm" type="password" />
        </div>
        <div className="error">{errorMessage}</div>
        <button className="form__submit btn" type="submit">
          Sing Up
        </button>
      </form>
    </div>
  );
};

export default reduxForm({ form: 'signup' })(Signup);
