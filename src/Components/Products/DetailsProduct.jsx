import { useLoaderData } from 'react-router-dom';
import Button from '../UI/Button';

const DetailsProduct = () => {
  const oneProductData = useLoaderData();
  const { proName, desc, brand, price, category, rating, photoUrl } =
    oneProductData[0];
  return (
    <div className='bg-white border-gray-200 dark:bg-gray-900/90'>
      <div className='max-w-screen-lg mx-auto p-4'>
        <div className='border rounded-md'>
          <img src={photoUrl} className='w-full rounded-tl-md rounded-tr-md' />
          <div className='textContent px-3 py-1 space-y-5 my-5'>
            <h1 className='text-3xl sm:text-5xl dark:text-slate-400'>
              <b className='text-black dark:text-slate-300'>Name:</b> {proName}
            </h1>
            <p className='text-xl sm:text-3xl dark:text-slate-400'>
              <b className='text-black dark:text-slate-300'>Description:</b>{' '}
              {desc}
            </p>
            <div className='text-2xl sm:text-4xl flex justify-between items-center'>
              <h2 className='dark:text-slate-400'>
                <b className='text-black dark:text-slate-300'>Brand:</b> {brand}
              </h2>
              <h1 className='dark:text-slate-400'>
                <b className='text-black dark:text-slate-300'>Price:</b> $
                {price}
              </h1>
            </div>
            <div className='text-2xl sm:text-4xl flex justify-between items-center'>
              <p className='dark:text-slate-400'>
                <b className='text-black dark:text-slate-300'>Category:</b>{' '}
                {category}
              </p>
              <p className='dark:text-slate-400'>
                <b className='text-black dark:text-slate-300'>Rating:</b>{' '}
                {rating}
              </p>
            </div>
            <div className='flex justify-between items-center py-5'>
              <Button displayName={'Add to cart'} type={'button'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsProduct;
