import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import tick from '../../img/tick.png';

const Done = props => {
  const authContext = useContext(AuthContext);

  const { validatePath, user } = authContext;

  useEffect(() => {
    validatePath(props.history.location.pathname);
    // print user object to console
    console.log(user);
    // eslint-disable-next-line
  }, []);

  const string =
    'Please verify your email address, you should have recieved an email from us already!';

  return (
    <div className='center-done'>
      <img src={tick} alt='' className='tick' />
      <h2>{string}</h2>
    </div>
  );
};

export default Done;
