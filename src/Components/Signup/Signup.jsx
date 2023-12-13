/* eslint-disable no-useless-escape */
import { updateProfile } from 'firebase/auth';
import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { BsCheck2All } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import signupImg from '../../assets/signup-image.png';
import Button from '../UI/Button';
import Checkbox from '../UI/Checkbox';
import FormIllustration from '../UI/FormIllustration';
import FormLayout from '../UI/FormLayout';
import Input from '../UI/Input';

const signupInit = {
  name: '',
  email: '',
  photoUrl: '',
  password: '',
  confirmPassword: '',
};
const errorInit = {
  name: '',
  email: '',
  photoUrl: '',
  password: '',
  confirmPassword: '',
  terms: false,
};
const dynamicError = {
  uppercase: false,
  lowercase: false,
  special: false,
  length: false,
};
const Signup = () => {
  const [signup, setSignup] = useState({ ...signupInit });
  const [error, setError] = useState({ ...errorInit });
  const [isShow, setIsShow] = useState(false);
  const [terms, setTerms] = useState(false);
  const { singupEmailandPass, setUpdateProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  // input change control by react and error hide
  const handleInput = (e) => {
    const { name, value } = e.target;
    setSignup((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: '' }));
    if (name === 'password') {
      setIsShow(true);
      // password strong check
      if (value.length >= 6) {
        dynamicError.length = true;
      } else {
        dynamicError.length = false;
      }
      if (/[A-Z]/.test(value)) {
        dynamicError.uppercase = true;
      } else {
        dynamicError.uppercase = false;
      }
      if (/[a-z]/.test(value)) {
        dynamicError.lowercase = true;
      } else {
        dynamicError.lowercase = false;
      }
      if (/[\W_]/.test(value)) {
        dynamicError.special = true;
      } else {
        dynamicError.special = false;
      }
    }
  };
  // handle account create
  const handleSignupEmailPassword = (e) => {
    e.preventDefault();
    const { name, email, photoUrl, password, confirmPassword } = signup;
    if (!name) {
      setError((prev) => ({ ...prev, name: 'name required !' }));
      return;
    } else if (name.length < 3) {
      setError((prev) => ({ ...prev, name: 'name must be 3 characters !' }));
      return;
    }
    if (!email) {
      setError((prev) => ({ ...prev, email: 'Email Required !' }));
      return;
    } else if (
      !/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/.test(
        email
      )
    ) {
      setError((prev) => ({ ...prev, email: 'Email not valid !' }));
      return;
    }
    if (!photoUrl) {
      setError((prev) => ({ ...prev, photoUrl: 'Input your Photo url !' }));
      return;
    }
    if (!password) {
      setError((prev) => ({ ...prev, password: 'Password Required' }));
      return;
    } else if (!/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)) {
      setError((prev) => ({
        ...prev,
        password: '',
      }));
      return;
    }

    if (!confirmPassword) {
      setError((prev) => ({
        ...prev,
        confirmPassword: 'Confirm password Required',
      }));
      return;
    } else if (password !== confirmPassword) {
      setError((prev) => ({
        ...prev,
        confirmPassword: 'Confirm password and password not matched !',
      }));
      return;
    }
    if (!terms) {
      setError((prev) => ({
        ...prev,
        terms: true,
      }));
      return;
    }
    singupEmailandPass(email, password)
      .then((currentUser) => {
        updateProfile(currentUser.user, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {})
          .catch((error) =>
            swal('There was an error !', error.message, 'error')
          );
        swal('Account Create Successfull', '', 'success');
        fetch(`https://brand-shop-server-olive.vercel.app/jwt-token`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({ email: currentUser.user.email }),
        }).then(() => {});
        fetch(`https://brand-shop-server-olive.vercel.app/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({ email: currentUser.user.email }),
        }).then(() => {});
        setUpdateProfile({ photo: photoUrl, name: name });
        setTerms(false);
        navigate('/');
        setSignup({ ...signupInit });
      })
      .catch((error) => {
        swal('There was an error !', error.message, 'error');
      });
  };
  return (
    <FormLayout>
      <Helmet>
        <title>Marella | Signup</title>
      </Helmet>
      <FormIllustration src={signupImg} />
      {/* Sighup form  */}
      <div className='w-full md:w-2/4 border dark:border-gray-400 rounded-lg p-10 my-20'>
        <h1 className='text-4xl font-bold text-black dark:text-slate-200 mb-10'>
          Signup
        </h1>
        <form
          className='flex flex-col gap-5'
          onSubmit={handleSignupEmailPassword}
        >
          <Input
            displayName={'Name'}
            type={'name'}
            id={'name'}
            name={'name'}
            placeholder={'John Dou'}
            onChange={handleInput}
            value={signup.name}
            error={error.name}
          />
          <Input
            displayName={'Email'}
            type={'email'}
            id={'email'}
            name={'email'}
            placeholder={'example@gmail.com'}
            onChange={handleInput}
            value={signup.email}
            error={error.email}
          />
          <Input
            displayName={'Photo Url'}
            type={'link'}
            id={'photoUrl'}
            name={'photoUrl'}
            placeholder={'https://cutt.ly/Qwae4NeH'}
            onChange={handleInput}
            value={signup.photoUrl}
            error={error.photoUrl}
          />
          <Input
            displayName={'Password'}
            type={'password'}
            id={'password'}
            icon={true}
            name={'password'}
            placeholder={'fkdhk*&(#$JLDFjo'}
            onChange={handleInput}
            value={signup.password}
            error={error.password}
          />
          <Input
            displayName={'Confirm Password'}
            type={'password'}
            id={'confirmPassword'}
            icon={true}
            name={'confirmPassword'}
            placeholder={'fkdhk*&(#$JLDFjo'}
            onChange={handleInput}
            value={signup.confirmPassword}
            error={error.confirmPassword}
          />
          {/* dynamicError show  */}
          <div className={`hidden ${isShow && '!block'}`}>
            <div
              className={`flex gap-2 items-center ${
                dynamicError.lowercase ? 'text-green-500' : 'text-red-500'
              }`}
            >
              <BsCheck2All />
              <p>Must one lowercase</p>
            </div>
            <div
              className={`flex gap-2 items-center ${
                dynamicError.uppercase ? 'text-green-500' : 'text-red-500'
              }`}
            >
              <BsCheck2All />
              <p>Must one uppercase</p>
            </div>
            <div
              className={`flex gap-2 items-center ${
                dynamicError.special ? 'text-green-500' : 'text-red-500'
              }`}
            >
              <BsCheck2All />
              <p>Must one special character</p>
            </div>
            <div
              className={`flex gap-2 items-center ${
                dynamicError.length ? 'text-green-500' : 'text-red-500'
              }`}
            >
              <BsCheck2All />
              <p>Password must be 6 characters</p>
            </div>
          </div>
          <Checkbox
            type='checkbox'
            name='terms'
            id='terms'
            displayName={'I agree with all terms and condition.'}
            checked={terms}
            error={error.terms}
            onChange={() => {
              setTerms(!terms);
              setError((prev) => ({ ...prev, terms: false }));
            }}
          />
          <Button type={'submit'} displayName={'Signup'} />
          <div className='info'>
            <p className='w-full text-center dark:text-slate-200'>
              Already have an account?{' '}
              <Link
                to={'/login'}
                className='text-yellow-600 dark:text-yellow-500'
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </FormLayout>
  );
};

export default Signup;
