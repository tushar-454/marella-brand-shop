import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import swal from 'sweetalert';
import Auth from '../firebase/firebase-config';
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  // login with google
  const loginGoogle = () => {
    return signInWithPopup(Auth, new GoogleAuthProvider());
  };
  // logout or signout account
  const signoutAccount = () => {
    signOut(Auth)
      .then(() => swal('Account signout successfully', '', 'success'))
      .catch((error) => swal('There was an error !', error.message, 'error'));
  };
  useEffect(() => {
    const unsubscribr = onAuthStateChanged(Auth, (user) => {
      setLoading(false);
      setUser(user);
      console.log(user);
    });
    return () => unsubscribr();
  }, []);

  const userInfo = { loading, user, loginGoogle, signoutAccount };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
