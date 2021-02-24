/* eslint-disable react/prop-types */
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../../redux/auth/auth.actions';
import './Signup.scss';

const Signup = ({ handleSubmit, dispatch, history, errorMessage }) => {
  const onSubmit = (formProps) => {
    dispatch(
      actions.signup(formProps, (path) => {
        history.push(path);
      })
    );
  };

  return (
    <div className="signup-login">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="form__title">Sign Up</h1>
        <div className="form__fieldset-wrapper">
          <fieldset>
            <label className="form__label" htmlFor="name">
              Name
            </label>
            <Field
              className="form__input"
              name="name"
              type="text"
              component="input"
              autoComplete="none"
              required
            />
          </fieldset>
          <fieldset>
            <label className="form__label" htmlFor="email">
              Email
            </label>
            <Field
              className="form__input"
              name="email"
              type="text"
              component="input"
              autoComplete="none"
              required
            />
          </fieldset>
          <fieldset>
            <label className="form__label" htmlFor="password">
              Password
            </label>
            <Field
              className="form__input"
              name="password"
              type="password"
              component="input"
              autoComplete="none"
              required
            />
          </fieldset>
          <fieldset>
            <label className="form__label" htmlFor="passwordConfirm">
              Confirm Password
            </label>
            <Field
              className="form__input"
              name="passwordConfirm"
              type="password"
              component="input"
              autoComplete="none"
              required
            />
          </fieldset>
        </div>
        <div className="error">{errorMessage}</div>
        <button className="form__submit" type="submit">
          Sing Up
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { errorMessage: state.auth.errorMessage };
};

export default compose(connect(mapStateToProps, actions), reduxForm({ form: 'signup' }))(Signup);
