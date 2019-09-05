import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';

const Privacy = props => {
  const authContext = useContext(AuthContext);

  const { validatePath, updateCheckBox1, updateCheckBox2 } = authContext;

  useEffect(() => {
    validatePath(props.history.location.pathname);
    // eslint-disable-next-line
  }, []);

  const string1 = 'Recieve updates about Tray.io product by email';
  const string2 =
    'Recieve communication by email for other products created by the Tray.io team';

  const onClick = () => {
    props.history.push('/done');
  };

  return (
    <div className='center'>
      <div className='flex-container-privacy'>
        <div>
          <input type='checkbox' onChange={updateCheckBox1} />
          &nbsp;
          {string1}
        </div>

        <div>
          <input type='checkbox' onChange={updateCheckBox2} />
          &nbsp;
          {string2}
        </div>

        <div className='flex-item-btn'>
          <button
            className='submit'
            style={{ marginTop: '1rem' }}
            onClick={onClick}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
