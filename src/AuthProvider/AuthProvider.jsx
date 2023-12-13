import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
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
  const [updateProfile, setUpdateProfile] = useState({ photo: '', name: '' });
  const [cartItemCount, setCartItemCount] = useState(0);
  const [reFreshCard, setRefreshCart] = useState(false);

  // login with google
  const loginGoogle = () => {
    return signInWithPopup(Auth, new GoogleAuthProvider());
  };
  // logout or signout account
  const signoutAccount = () => {
    signOut(Auth)
      .then(() => {
        setCartItemCount(0);
        swal('Account signout successfully', '', 'success');
        fetch('https://brand-shop-server-olive.vercel.app/remove-token', {
          credentials: 'include',
        }).then(() => {});
      })
      .catch((error) => swal('There was an error !', error.message, 'error'));
  };
  // account creation with email and pass
  const singupEmailandPass = (email, password) => {
    return createUserWithEmailAndPassword(Auth, email, password);
  };
  // login with email and password
  const signinEmailandPass = (email, password) => {
    return signInWithEmailAndPassword(Auth, email, password);
  };
  useEffect(() => {
    const unsubscribr = onAuthStateChanged(Auth, (user) => {
      if (user) {
        fetch('https://brand-shop-server-olive.vercel.app/carts', {
          credentials: 'include',
        })
          .then((res) => res.json())
          .then((data) => {
            const userCartItem = data.filter((item) => item.uid === user.uid);
            setCartItemCount(userCartItem.length);
          });
      }
      setLoading(false);
      setUser(user);
    });
    return () => unsubscribr();
  }, []);
  const userInfo = {
    loading,
    user,
    loginGoogle,
    signoutAccount,
    singupEmailandPass,
    signinEmailandPass,
    updateProfile,
    setUpdateProfile,
    cartItemCount,
    setCartItemCount,
    reFreshCard,
    setRefreshCart,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
