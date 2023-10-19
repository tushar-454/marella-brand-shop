import PropTypes from 'prop-types';
const TextArea = ({ displayName, error, id, type, ...rest }) => {
  return (
    <div className='w-full flex flex-col gap-2'>
      <label
        htmlFor={id}
        className='text-black dark:text-slate-200 font-semibold text-xl'
      >
        {displayName}
      </label>
      <div>
        <textarea
          {...rest}
          id={id}
          type={type}
          rows={10}
          className={`w-full border focus:border-slate-400 text-black text-lg outline-none p-3 rounded bg-white dark:bg-slate-300`}
        ></textarea>
      </div>
      {error && <p className='text-red-500'>{error}</p>}
    </div>
  );
};

TextArea.propTypes = {
  displayName: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  id: PropTypes.string,
  icon: PropTypes.bool,
};

export default TextArea;
