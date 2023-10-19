import PropTypes from 'prop-types';
import { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
const Input = ({ displayName, icon = false, error, id, type, ...rest }) => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className='w-full flex flex-col gap-2'>
      <label
        htmlFor={id}
        className='text-black dark:text-slate-200 font-semibold text-xl'
      >
        {displayName}
      </label>
      <div className='relative'>
        <input
          {...rest}
          id={id}
          type={showPass ? 'text' : type}
          className={`w-full border focus:border-slate-400 text-black text-lg outline-none p-3 rounded bg-white dark:bg-slate-300 ${
            icon && 'pr-12'
          }`}
        />
        {icon && (
          <span
            onClick={() => setShowPass(!showPass)}
            className='absolute top-3 right-3 text-2xl cursor-pointer'
          >
            {showPass ? <BsEyeSlash /> : <BsEye />}
          </span>
        )}
      </div>
      {error && <p className='text-red-500'>{error}</p>}
    </div>
  );
};

Input.propTypes = {
  displayName: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  id: PropTypes.string,
  icon: PropTypes.bool,
};

export default Input;
