import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { PiSignOutBold } from 'react-icons/pi';
const User = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className='flex items-center md:order-2 relative'>
      <button
        type='button'
        className='flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 group'
        onClick={() => setDropdown(!dropdown)}
      >
        <img
          className='w-12 h-12 rounded-full'
          src='https://cutt.ly/xwQLMFJD'
          alt='user photo'
        />
      </button>
      {/* <!-- Dropdown menu --> */}
      <div
        className={`z-50 absolute top-12 right-0 transition origin-top ${
          dropdown ? 'scale-100' : 'scale-0'
        } my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
      >
        <div className='px-4 py-3'>
          <span className='block text-gray-900 dark:text-white'>
            Bonnie Green
          </span>
          <span className='block  text-gray-500 truncate dark:text-gray-400'>
            name@flowbite.com
          </span>
        </div>
        <ul className='py-2' aria-labelledby='user-menu-button'>
          <li className='flex gap-2 items-center cursor-pointer px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
            Sign out <PiSignOutBold />
          </li>
        </ul>
      </div>
      <button
        type='button'
        className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black dark:text-slate-100 rounded-lg md:hidden'
      >
        <FaBars className='text-2xl' />
      </button>
    </div>
  );
};
export default User;