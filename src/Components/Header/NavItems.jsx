import { AiOutlineHome } from 'react-icons/ai';
import { BsDatabaseAdd } from 'react-icons/bs';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
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
  return (
    <div
      className={`items-center justify-between hidden
     w-full md:flex md:w-auto md:order-1`}
    >
      <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
        {navItems.map((item, index) => (
          <li key={index}>
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
                </span>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default NavItems;
