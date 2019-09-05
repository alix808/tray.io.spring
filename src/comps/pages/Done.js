import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';

const Done = props => {
  const authContext = useContext(AuthContext);

  const { validatePath } = authContext;

  useEffect(() => {
    validatePath(props.history.location.pathname);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Done</h1>
    </div>
  );
};

export default Done;
