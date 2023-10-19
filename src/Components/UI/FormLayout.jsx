import PropTypes from 'prop-types';

const FormLayout = ({ children }) => {
  return (
    <div className='bg-white dark:bg-gray-900/90'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <div className='flex gap-10 justify-center items-center w-full md:w-[1024px] mx-auto'>
          {children}
        </div>
      </div>
    </div>
  );
};

FormLayout.propTypes = {
  children: PropTypes.node,
};

export default FormLayout;
