/* eslint-disable react/prop-types */
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../../redux/auth/auth.actions';

const Signup = ({ handleSubmit, dispatch, history, errorMessage }) => {
  const onSubmit = (formProps) => {
    dispatch(
      actions.signup(formProps, (path) => {
        history.push(path);
      })
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label htmlFor="name">Name</label>
        <Field name="name" type="text" component="input" autoComplete="none" />
      </fieldset>
      <fieldset>
        <label htmlFor="email">Email</label>
        <Field name="email" type="text" component="input" autoComplete="none" />
      </fieldset>
      <fieldset>
        <label htmlFor="password">Password</label>
        <Field name="password" type="password" component="input" autoComplete="none" />
      </fieldset>
      <fieldset>
        <label htmlFor="passwordConfirm">Confirm Password</label>
        <Field name="passwordConfirm" type="password" component="input" autoComplete="none" />
      </fieldset>
      <div className="">{errorMessage}</div>
      <button type="submit">Sing Up</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return { errorMessage: state.auth.errorMessage };
};

export default compose(connect(mapStateToProps, actions), reduxForm({ form: 'signup' }))(Signup);
