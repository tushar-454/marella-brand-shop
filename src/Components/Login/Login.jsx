import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import loginImg from '../../assets/login-image.png';
import Button from '../UI/Button';
import Checkbox from '../UI/Checkbox';
import FormIllustrarion from '../UI/FormIllustration';
import FormLayout from '../UI/FormLayout';
import Input from '../UI/Input';
const loginInit = {
  email: '',
  password: '',
};
const errorInit = {
  email: '',
  password: '',
};
const Login = () => {
  const [login, setLogin] = useState({ ...loginInit });
  const [error, setError] = useState({ ...errorInit });
  const { loginGoogle, signinEmailandPass } = useContext(AuthContext);
  const { state } = useLocation();
  const navigate = useNavigate();
  const handleLoginGoogle = () => {
    loginGoogle()
      .then(() => {
        swal('Account login successfully', '', 'success');
        navigate(state || '/');
      })
      .catch((error) => swal('There was an error !', error.message, 'error'));
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: '' }));
  };
  // handle email and password login
  const handleSigninEmailPassword = (e) => {
    e.preventDefault();
    const { email, password } = login;
    if (!email) {
      setError((prev) => ({ ...prev, email: 'Email required !' }));
      return;
    }
    if (!password) {
      setError((prev) => ({ ...prev, password: 'Password required !' }));
      return;
    }
    signinEmailandPass(email, password)
      .then(() => {
        swal('Login Successfull', '', 'success');
        navigate(state || '/');
        setLogin({ ...loginInit });
      })
      .catch((error) => {
        swal('There was an error !', error.message, 'error');
      });
  };
  return (
    <FormLayout>
      <Helmet>
        <title>Marella | Login </title>
      </Helmet>
      {/* login form  */}
      <div className='w-full md:w-2/4 border dark:border-gray-400 rounded-lg p-10 my-20'>
        <h1 className='text-4xl font-bold text-black dark:text-slate-200 mb-10'>
          Login
        </h1>
        <form
          className='flex flex-col gap-5'
          onSubmit={handleSigninEmailPassword}
        >
          <Input
            displayName={'Email'}
            type={'email'}
            id={'email'}
            name={'email'}
            placeholder={'example@gmail.com'}
            onChange={handleInput}
            value={login.email}
            error={error.email}
          />
          <Input
            displayName={'Password'}
            type={'password'}
            id={'password'}
            icon={true}
            name={'password'}
            placeholder={'fkdhk*&(#$JLDFjo'}
            onChange={handleInput}
            value={login.password}
            error={error.password}
          />
          {/* forgot pass and remember */}
          <div className='w-full flex justify-between items-center py-2'>
            <Checkbox
              type='checkbox'
              name='remember'
              id='remember'
              displayName={'Remember me.'}
            />
            <div className='font-semibold text-slate-600 dark:text-slate-200'>
              <p className='cursor-pointer hover:underline underline-offset-4 transition'>
                Forgot Password?
              </p>
            </div>
          </div>
          <Button type={'submit'} displayName={'Login'} />
          <hr />
          <span className='w-full text-center dark:text-white'>Or</span>
          <Button
            displayName={'Login with google'}
            type={'button'}
            loginWith={true}
            onClick={() => handleLoginGoogle()}
            icon={<FcGoogle className='text-2xl' />}
          />
          <div className='info'>
            <p className='w-full text-center dark:text-slate-200'>
              Don’t have an account?{' '}
              <Link
                to={'/signup'}
                className='text-yellow-600 dark:text-yellow-500'
              >
                Create an account
              </Link>
            </p>
          </div>
        </form>
      </div>
      <FormIllustrarion src={loginImg} />
    </FormLayout>
  );
};

export default Login;
