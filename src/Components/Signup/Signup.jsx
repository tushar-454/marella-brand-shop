import { Link } from 'react-router-dom';
import signupImg from '../../assets/signup-image.png';
import Button from '../UI/Button';
import Input from '../UI/Input';

const Signup = () => {
  return (
    <div className='bg-white dark:bg-gray-900/90'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <div className='flex gap-10 justify-center items-center w-full md:w-[1024px] mx-auto'>
          {/* side image */}
          <div className='w-full md:w-2/4 hidden md:block'>
            <img src={signupImg} className='w-full' />
          </div>
          {/* Sighup form  */}
          <div className='w-full md:w-2/4 border dark:border-gray-400 rounded-lg p-10 my-20'>
            <h1 className='text-4xl font-bold text-black dark:text-slate-200 mb-10'>
              Signup
            </h1>
            <form className='flex flex-col gap-5'>
              <Input
                displayName={'Name'}
                type={'name'}
                id={'name'}
                name={'name'}
                placeholder={'John Dou'}
                error={''}
              />
              <Input
                displayName={'Email'}
                type={'email'}
                id={'email'}
                name={'email'}
                placeholder={'example@gmail.com'}
                error={''}
              />
              <Input
                displayName={'Photo Url'}
                type={'link'}
                id={'photoUrl'}
                name={'photoUrl'}
                placeholder={'https://cutt.ly/Qwae4NeH'}
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
              <Input
                displayName={'Confirm Password'}
                type={'password'}
                id={'confirmPassword'}
                icon={true}
                name={'confirmPassword'}
                placeholder={'fkdhk*&(#$JLDFjo'}
                error={''}
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
        </div>
      </div>
    </div>
  );
};

export default Signup;
