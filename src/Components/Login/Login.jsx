import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import loginImg from '../../assets/login-image.png';
import Button from '../UI/Button';
import Input from '../UI/Input';
const Login = () => {
  const { loginGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLoginGoogle = () => {
    loginGoogle()
      .then(() => {
        swal('Account login successfully', '', 'success');
        navigate('/');
      })
      .catch((error) => swal('There was an error !', error.message, 'error'));
  };
  return (
    <div className='bg-white dark:bg-gray-900/90'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <div className='flex gap-10 justify-center items-center w-full md:w-[1024px] mx-auto'>
          {/* login form  */}
          <div className='w-full md:w-2/4 border dark:border-gray-400 rounded-lg p-10 my-20'>
            <h1 className='text-4xl font-bold text-black dark:text-slate-200 mb-10'>
              Login
            </h1>
            <form className='flex flex-col gap-5'>
              <Input
                displayName={'Email'}
                type={'email'}
                id={'email'}
                name={'email'}
                placeholder={'example@gmail.com'}
                error={''}
              />
              <Input
                displayName={'Password'}
                type={'password'}
                id={'password'}
                icon={true}
                name={'password'}
                placeholder={'fkdhk*&(#$JLDFjo'}
                error={''}
              />
              {/* forgot pass and remember */}
              <div className='w-full flex justify-between items-center py-2'>
                <div className='font-semibold text-slate-600 dark:text-slate-200'>
                  <input
                    type='checkbox'
                    name='remember'
                    id='remember'
                    className='mr-1 cursor-pointer'
                  />
                  <label htmlFor='remember' className='cursor-pointer'>
                    Remember Me.
                  </label>
                </div>
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
          {/* side image */}
          <div className='w-full md:w-2/4 hidden md:block'>
            <img src={loginImg} className='w-full' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
