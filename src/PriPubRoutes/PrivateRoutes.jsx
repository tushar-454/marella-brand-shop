import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoutes = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const { pathname } = useLocation();
  if (loading) {
    console.log('loading');
    return;
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
