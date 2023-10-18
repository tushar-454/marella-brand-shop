import BrandLogo from './BrandLogo';
import NavItems from './NavItems';
import User from './User';

const Header = () => {
  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative'>
        <BrandLogo />
        <User />
        <NavItems />
      </div>
    </nav>
  );
};

export default Header;
