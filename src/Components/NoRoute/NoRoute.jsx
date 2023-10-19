import { Link } from 'react-router-dom';
import noRoute from '../../assets/no-route.gif';

const NoRoute = () => {
  return (
    <div className='w-full flex flex-col gap-10 items-center'>
      <img src={noRoute} className='w-fit' />

      <h1 className='mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl text-center'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r to-[#e9c511] from-[#e0d39c]'>
          Page not found. Invalid Route.
        </span>
      </h1>

      <Link to={'/'}>
        <button
          type='button'
          className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 transition hover:scale-105'
        >
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default NoRoute;
