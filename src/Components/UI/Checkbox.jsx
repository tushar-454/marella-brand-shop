import PropTypes from 'prop-types';

const Checkbox = ({ displayName, id, ...rest }) => {
  return (
    <div className='font-semibold text-slate-600 dark:text-slate-200'>
      <input {...rest} id={id} className='mr-1 cursor-pointer' />
      <label htmlFor={id} className='cursor-pointer'>
        {displayName}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  displayName: PropTypes.string,
  id: PropTypes.string,
};

export default Checkbox;
