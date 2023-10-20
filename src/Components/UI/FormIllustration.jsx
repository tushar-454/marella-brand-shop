import PropTypes from 'prop-types';

const FormIllustrarion = ({ src }) => {
  return (
    <div className='w-full md:w-2/4 hidden md:block'>
      <img src={src} className='w-full rounded-md' />
    </div>
  );
};

FormIllustrarion.propTypes = {
  src: PropTypes.string,
};

export default FormIllustrarion;
