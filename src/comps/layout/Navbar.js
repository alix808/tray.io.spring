import React, { useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const authContext = useContext(AuthContext);

  const { userPath, privacyPath, donePath } = authContext;

  const color = {
    background: '#94bcf1'
  };

  return (
    <div className='flex-container'>
      <Link to='/' className='flex-item' style={userPath ? color : null}>
        User
      </Link>
      <Link
        to='/privacy'
        className='flex-item'
        style={privacyPath ? color : null}
      >
        Privacy
      </Link>
      <Link to='/done' className='flex-item' style={donePath ? color : null}>
        Done
      </Link>
    </div>
  );
};

export default Navbar;
