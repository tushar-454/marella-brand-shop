import { useContext, useEffect, useState } from 'react';
import { CiDark } from 'react-icons/ci';
import { LuLogIn } from 'react-icons/lu';
import { MdDarkMode } from 'react-icons/md';
import { PiSignOutBold } from 'react-icons/pi';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const User = () => {
  const [dropdown, setDropdown] = useState(false);
  const { pathname } = useLocation();
  const { user, signoutAccount, updateProfile } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('color-scheme')) {
      setDarkMode(localStorage.getItem('color-scheme'));
    }
  }, []);

  useEffect(() => {
    const htmlTag = document.querySelector('html');
    if (darkMode) {
      htmlTag.classList.add('dark');
      localStorage.setItem('color-scheme', 'dark');
    } else {
      htmlTag.classList.remove('dark');
      localStorage.removeItem('color-scheme');
    }
    const outlet = document.querySelectorAll('.outlet');
    outlet.forEach((item) =>
      item.addEventListener('click', () => setDropdown(false))
    );
    window.addEventListener('scroll', () => setDropdown(false));
  }, [darkMode]);

  return (
    <div className='flex items-center md:order-2 relative'>
      {user ? (
        <>
          <button
            type='button'
            className='flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 group'
            onClick={() => setDropdown(!dropdown)}
          >
            <img
              className='w-12 h-12 rounded-full'
              src={user.photoURL || updateProfile.photo}
              alt='user photo'
            />
          </button>
          {/* <!-- Dropdown menu --> */}
          <div
            className={`z-50 absolute top-12 right-0 transition origin-top-right ${
              dropdown ? 'scale-100' : 'scale-0'
            } my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
          >
            <div className='px-4 py-3'>
              <span className='block text-gray-900 dark:text-white'>
                {user?.displayName || updateProfile.name}
              </span>
              <span className='block  text-gray-500 truncate dark:text-gray-400'>
                {user?.email}
              </span>
            </div>
            <ul className='py-2' aria-labelledby='user-menu-button'>
              <li
                onClick={() => {
                  setDarkMode(!darkMode);
                  setDropdown(!dropdown);
                }}
                className='flex gap-2 items-center cursor-pointer px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
              >
                {darkMode ? (
                  <span className='flex gap-2 items-center'>
                    Lightmode <CiDark />
                  </span>
                ) : (
                  <span className='flex gap-2 items-center'>
                    Darkmode <MdDarkMode />
                  </span>
                )}
              </li>
              <li
                onClick={() => {
                  signoutAccount();
                  setDropdown(false);
                }}
                className='flex gap-2 items-center cursor-pointer px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
              >
                Sign out <PiSignOutBold />
              </li>
            </ul>
          </div>
        </>
      ) : (
        <div>
          <Link
            to={pathname === '/login' ? '/signup' : '/login'}
            className='flex gap-2 items-center text-white text-xl bg-purple-700 hover:bg-purple-800 font-medium rounded-lg px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 transition'
          >
            {pathname === '/login' ? 'Signup' : 'Login'}
            <LuLogIn className='text-xl relative top-[1px]' />
          </Link>
        </div>
      )}
    </div>
  );
};
export default User;
