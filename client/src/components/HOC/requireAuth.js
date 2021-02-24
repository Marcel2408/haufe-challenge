/* eslint-disable consistent-return */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserMylist } from '../../redux/user/user.actions';

export default (ChildComponent) => {
  const ComposedComponent = (props) => {
    useEffect(() => {
      if (!props.auth) {
        return props.history.push('/');
      }
      if (!props.mylist.length) {
        props.onLoadMylist(props.auth);
      }
    }, []);
    return <ChildComponent {...props} />;
  };

  const mapStateToProps = (state) => {
    return { auth: state.auth.authenticated, mylist: state.user.mylist };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      onLoadMylist: (auth) => dispatch(getUserMylist(auth)),
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(ComposedComponent);
};
