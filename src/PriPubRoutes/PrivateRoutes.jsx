import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoutes = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const { pathname } = useLocation();
  if (loading) {
    return (
      <div className='w-full h-screen grid justify-center pt-20 dark:bg-gray-900/90'>
        <span className='relative flex h-20 w-20'>
          <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75'></span>
          <span className='relative inline-flex rounded-full h-20 w-20 bg-sky-500'></span>
        </span>
      </div>
    );
  }
  if (!user) {
    return <Navigate to={'/login'} state={pathname} />;
  }
  return children;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoutes;
