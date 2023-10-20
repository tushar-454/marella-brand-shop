import { useContext, useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BsDatabaseAdd } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { RxCross1 } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const navItems = [
  {
    id: 1,
    path: '/',
    name: 'Home',
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    path: '/add-product',
    name: 'Add Product',
    icon: <BsDatabaseAdd />,
  },
  {
    id: 3,
    path: '/cart',
    name: 'My Cart',
    icon: <HiOutlineShoppingCart />,
  },
];
const NavItems = () => {
  const [navItemsShow, setNavItemsShow] = useState(false);
  const { user, cartItemCount } = useContext(AuthContext);
  return (
    <>
      <div
        className={`outlet items-center justify-between ${
          navItemsShow ? 'block' : 'hidden'
        }
     w-full md:flex md:w-auto md:order-1`}
      >
        <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
          {navItems.map((item, index) => (
            <li key={index} onClick={() => setNavItemsShow(false)}>
              <NavLink
                to={item.path}
                className={`py-2 pl-3 pr-4 text-lg text-black dark:text-slate-100`}
              >
                {({ isActive }) => (
                  <span
                    className={`${
                      isActive ? 'font-bold dark:text-[#FFB878]' : ''
                    } flex gap-1 items-center `}
                  >
                    {item.icon}
                    {item.name}
                    {item.name === 'My Cart' && (
                      <sup className='w-5 h-5 flex justify-center items-center bg-blue-500 text-white dark:bg-yellow-500 rounded-full'>
                        {cartItemCount}
                      </sup>
                    )}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {user && (
        <button
          type='button'
          onClick={() => setNavItemsShow(!navItemsShow)}
          className='absolute right-20 top-5 p-2 w-10 h-10 text-2xl text-black dark:text-slate-100 rounded-lg md:hidden'
        >
          {navItemsShow ? (
            <RxCross1 className='text-2xl' />
          ) : (
            <FaBars className='text-2xl' />
          )}
        </button>
      )}
    </>
  );
};
export default NavItems;
