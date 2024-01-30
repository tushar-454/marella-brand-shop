import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
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
const resolver = async (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = {
      type: 'required',
      message: 'Email is required',
    };
  } else if (!values.email.includes('@') || !values.email.includes('.')) {
    errors.email = {
      type: 'required',
      message: 'Email is not valid',
    };
  }
  if (!values.password) {
    errors.password = {
      type: 'required',
      message: 'Password is required',
    };
  } else if (values.password.length < 6) {
    errors.password = {
      type: 'required',
      message: 'Password must be at least 6 characters',
    };
  } else if (values.password.length > 20) {
    errors.password = {
      type: 'required',
      message: 'Password must be less than 20 characters',
    };
  } else if (!values.password.match(/[a-zA-Z]/g)) {
    errors.password = {
      type: 'required',
      message: 'Password must contain at least one letter',
    };
  } else if (!values.password.match(/[0-9]/g)) {
    errors.password = {
      type: 'required',
      message: 'Password must contain at least one number',
    };
  } else if (!values.password.match(/[!@#$%^&*]/g)) {
    errors.password = {
      type: 'required',
      message: 'Password must contain at least one special character',
    };
  } else if (values.password.match(/\s/g)) {
    errors.password = {
      type: 'required',
      message: 'Password must not contain any whitespace',
    };
  }
  return {
    errors,
    values,
  };
};
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'all', resolver });
  const { loginGoogle, signinEmailandPass } = useContext(AuthContext);
  const { state } = useLocation();
  const navigate = useNavigate();
  const handleLoginGoogle = () => {
    loginGoogle()
      .then((currentUser) => {
        swal('Account login successfully', '', 'success');
        fetch(`https://brand-shop-server-olive.vercel.app/users`)
          .then((res) => res.json())
          .then((data = []) => {
            const ifExists = data.find(
              (item) => item.email === currentUser.user.email
            );
            if (!ifExists) {
              fetch(`https://brand-shop-server-olive.vercel.app/users`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ email: currentUser.user.email }),
              });
            }
          });
        fetch(`https://brand-shop-server-olive.vercel.app/jwt-token`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({ email: currentUser.user.email }),
        }).then(() => {});
        navigate(state || '/');
      })
      .catch((error) => swal('There was an error !', error.message, 'error'));
  };
  // handle email and password login
  const handleSigninEmailPassword = (data) => {
    const { email, password } = data;
    signinEmailandPass(email, password)
      .then((currentUser) => {
        swal('Login Successfull', '', 'success');
        navigate(state || '/');
        reset();
        fetch(`https://brand-shop-server-olive.vercel.app/users`)
          .then((res) => res.json())
          .then((data) => {
            const ifExists = data.find(
              (item) => item.email === currentUser.user.email
            );
            if (!ifExists) {
              fetch(`https://brand-shop-server-olive.vercel.app/users`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ email: currentUser.user.email }),
              });
            }
          });
        fetch(`https://brand-shop-server-olive.vercel.app/jwt-token`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({ email: currentUser.user.email }),
        }).then(() => {});
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
          onSubmit={handleSubmit(handleSigninEmailPassword)}
        >
          <Input
            displayName={'Email'}
            type={'email'}
            id={'email'}
            name={'email'}
            placeholder={'example@gmail.com'}
            formdata={{ ...register('email', { required: true }) }}
            error={errors.email && errors.email.message}
          />
          <Input
            displayName={'Password'}
            type={'password'}
            id={'password'}
            icon={true}
            name={'password'}
            placeholder={'fkdhk*&(#$JLDFjo'}
            formdata={{ ...register('password', { required: true }) }}
            error={errors.password && errors.password.message}
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
