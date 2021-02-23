import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../../redux/auth/auth.actions';

const Login = (handleSubmit, dispatch, history, errorMessage) => {
  const onSubmit = (formProps) => {
    dispatch(
      actions.signin(formProps, (path) => {
        history.push(path);
      })
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label htmlFor="name">Email</label>
        <Field name="email" type="text" component="input" autoComplete="none" />
      </fieldset>
      <fieldset>
        <label htmlFor="name">Password</label>
        <Field name="password" type="password" component="input" autoComplete="none" />
      </fieldset>
      <div className="">{errorMessage}</div>
      <button type="button">Login</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return { errorMessage: state.auth.errorMessage };
};

export default compose(connect(mapStateToProps, actions), reduxForm({ form: 'signin' }))(Login);
