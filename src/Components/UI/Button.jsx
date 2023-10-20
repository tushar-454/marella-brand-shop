import PropTypes from 'prop-types';

const Button = ({
  type,
  displayName,
  loginWith = false,
  icon,
  icona,
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${
        loginWith
          ? '!bg-white !border !transition hover:bg-slate-200 !text-black dark:bg-slate-400 !rounded-full font-semibold'
          : ''
      } w-full flex gap-3 justify-center items-center py-3 rounded-md text-lg text-white bg-yellow-700 dark:bg-yellow-600`}
    >
      {icon && icon}
      {displayName}
      {icona && icona}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  displayName: PropTypes.string,
  loginWith: PropTypes.bool,
  icon: PropTypes.node,
  icona: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
