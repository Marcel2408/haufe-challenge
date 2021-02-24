/* eslint-disable consistent-return */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserMylist } from '../redux/user/user.actions';

export default (ChildComponent) => {
  const ComposedComponent = (props) => {
    const authenticated = useSelector((state) => state.auth.authenticated);
    const mylist = useSelector((state) => state.user.mylist);
    const dispatch = useDispatch();

    useEffect(() => {
      if (!authenticated) {
        return props.history.push('/');
      }
      if (!mylist.length) {
        dispatch(getUserMylist(authenticated));
      }
    }, []);

    return <ChildComponent {...props} />;
  };

  return ComposedComponent;
};
