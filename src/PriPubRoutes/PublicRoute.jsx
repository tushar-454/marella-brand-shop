import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PublicRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);

  if (loading) {
    console.log('loading');
    return;
  }
  if (user) {
    return <Navigate to={'/'} />;
  }
  return children;
};

PublicRoute.propTypes = {
  children: PropTypes.node,
};

export default PublicRoute;
