import { Link } from 'react-router-dom';
import brandLogo from '../../assets/brand-logo.png';
const BrandLogo = () => {
  return (
    <>
      <Link to='/' className='flex items-center'>
        <img
          src={brandLogo}
          className='h-10 mr-3'
          id='darkBrandLogo'
          alt='Flowbite Logo'
        />
      </Link>
    </>
  );
};

export default BrandLogo;
