/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { reduxForm } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';
import { login, deleteError } from '../../redux/auth/auth.actions';
import FormFieldset from '../form-fieldset/FormFieldset';

const Login = ({ handleSubmit, history }) => {
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const dispatch = useDispatch();

  const onSubmit = (formProps) => {
    dispatch(
      login(formProps, (path) => {
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
    <div className="login">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="form__title">Log in</h1>
        <div className="form__fieldset-wrapper">
          <FormFieldset label="Email" name="email" type="email" />
          <FormFieldset label="Password" name="password" type="password" />
        </div>
        <div className="error">{errorMessage}</div>
        <button className="form__submit btn" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

export default reduxForm({ form: 'signin' })(Login);
