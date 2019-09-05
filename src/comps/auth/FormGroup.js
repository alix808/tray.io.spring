import React from 'react';
import PropTypes from 'prop-types';

const FormGroup = ({ array, value, onChange, required }) => {
  const [htmlFor, title, type, name, minLength] = array;

  return (
    <div className='form-group'>
      <label htmlFor={htmlFor}>{title}</label>
      {required ? (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          minLength={minLength}
          required
        />
      ) : (
        <input type={type} name={name} value={value} onChange={onChange} />
      )}
    </div>
  );
};

FormGroup.propTypes = {
  array: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool.isRequired
};

export default FormGroup;
