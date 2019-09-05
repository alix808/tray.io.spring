import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import FormGroup from './FormGroup';
import { nameArr, roleArr, emailArr, passArr, pass2Arr } from './FormTypes';

const Register = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;

  const { validatePath, checkThree, registerUser } = authContext;

  useEffect(() => {
    validatePath(props.history.location.pathname);
    // eslint-disable-next-line
  }, []);

  const [user, setUser] = useState({
    name: '',
    role: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, role, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    validation();
  };

  const validation = () => {
    let data = checkThree(password, password2);
    if (data) {
      registerUser(user);
      props.history.push('/privacy');
      setAlert('User registered', 'success');
    }
    if (!data) {
      setAlert(
        'Passwords must match & contain atleast one number, one lowercase letter & one uppercase letter',
        'danger'
      );
    }
  };

  return (
    <div className='form-container'>
      <form onSubmit={onSubmit}>
        <FormGroup
          array={nameArr}
          value={name}
          onChange={onChange}
          required={true}
        />
        <FormGroup
          array={roleArr}
          value={role}
          onChange={onChange}
          required={false}
        />
        <FormGroup
          array={emailArr}
          value={email}
          onChange={onChange}
          required={true}
        />
        <FormGroup
          array={passArr}
          value={password}
          onChange={onChange}
          required={true}
        />
        <FormGroup
          array={pass2Arr}
          value={password2}
          onChange={onChange}
          required={true}
        />
        <div className='flex-item-btn'>
          <input type='submit' value='Submit' className='submit' />
        </div>
      </form>
    </div>
  );
};

export default Register;
