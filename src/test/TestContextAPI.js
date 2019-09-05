import React, { useContext } from 'react';
import AuthContext from '../context/auth/authContext';

const TestContextAPI = () => {
  const authContext = useContext(AuthContext);

  const { test } = authContext;

  return (
    <button onClick={test} className='btn btn-primary btn-block'>
      Test Context API
    </button>
  );
};

export default TestContextAPI;
