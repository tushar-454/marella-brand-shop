import { Link } from 'react-router-dom';
import BrandLogo from '../Header/BrandLogo';

const Footer = () => {
  return (
    <footer className='bg-white dark:bg-gray-900'>
      <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <BrandLogo />
          <ul className='flex flex-wrap gap-10 items-center my-10 text-base font-medium text-gray-500 sm:mb-0 dark:text-slate-200'>
            <li>
              <a href='#' className='hover:underline '>
                About
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline '>
                Licensing
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <span className='block text-center text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2023{' '}
          <Link to='/' className='hover:underline'>
            Marella™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
