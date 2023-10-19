import PropTypes from 'prop-types';

const Checkbox = ({ displayName, ...rest }) => {
  return (
    <div className='font-semibold text-slate-600 dark:text-slate-200'>
      <input {...rest} className='mr-1 cursor-pointer' />
      <label htmlFor='remember' className='cursor-pointer'>
        {displayName}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  displayName: PropTypes.string,
};

export default Checkbox;
