/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
  const ComposedComponent = (props) => {
    useEffect(() => {
      const shouldNavigateAway = () => {
        if (!props.auth) {
          props.history.push('/');
        }
      };
      shouldNavigateAway();
    });
    return <ChildComponent {...props} />;
  };

  const mapStateToProps = (state) => {
    return { auth: state.auth.authenticated };
  };

  return connect(mapStateToProps)(ComposedComponent);
};
