import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { GiArmoredBoomerang } from 'react-icons/gi';
import { RxUpdate } from 'react-icons/rx';
import Rating from 'react-rating';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import AdsSlider from './AdsSlider';

const BrandProducts = () => {
  const brandProducts = useLoaderData();
  const { brandname } = useParams();
  return (
    <div className='bg-white border-gray-200 dark:bg-gray-900/90'>
      <div className='max-w-screen-xl mx-auto p-4'>
        {/* ads slider  */}
        <div className='adsSlider'>
          <div className='slider'>
            <AdsSlider />
          </div>
        </div>
        {/* product list based on brand, data come from database  */}
        {brandProducts?.length === 0 && (
          <div className='w-full text-3xl text-center font-semibold dark:text-slate-200 my-20'>
            No products found . . .
          </div>
        )}
        {brandProducts?.length > 0 && (
          <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-20'>
            {brandProducts?.map((product, index) => (
              <div key={index} className='border rounded-md space-y-2'>
                <img
                  src={product.photoUrl}
                  className='w-full rounded-tl-md rounded-tr-md'
                />
                <div className='textContent px-3 py-1'>
                  <h1 className='dark:text-slate-400'>
                    <b className='text-black dark:text-slate-300'>Name:</b>{' '}
                    {product.proName}
                  </h1>
                  <p className='dark:text-slate-400'>
                    <b className='text-black dark:text-slate-300'>
                      Description:
                    </b>{' '}
                    {`${product.desc.slice(0, 100)} . . .`}
                  </p>
                  <div className='flex justify-between items-center'>
                    <h2 className='dark:text-slate-400'>
                      <b className='text-black dark:text-slate-300'>Brand:</b>{' '}
                      {product.brand}
                    </h2>
                    <h1 className='dark:text-slate-400'>
                      <b className='text-black dark:text-slate-300'>Price:</b> $
                      {product.price}
                    </h1>
                  </div>
                  <div className='flex justify-between items-center'>
                    <p className='dark:text-slate-400'>
                      <b className='text-black dark:text-slate-300'>
                        Category:
                      </b>{' '}
                      {product.category}
                    </p>
                    <Rating
                      initialRating={product.rating}
                      emptySymbol={
                        <AiOutlineStar className='text-xl text-yellow-400' />
                      }
                      fullSymbol={
                        <AiFillStar className='text-xl text-yellow-400' />
                      }
                      readonly
                    />
                  </div>
                  <div className='flex justify-between items-center py-5'>
                    <Link
                      to={`/brand/${product.brand.toLowerCase()}/${
                        product._id
                      }`}
                      className='flex gap-2 items-center bg-blue-500 transition hover:bg-blue-600 px-4 py-1 text-white rounded-tl-lg rounded-br-lg rounded-tr rounded-bl'
                    >
                      Details <GiArmoredBoomerang className='text-white' />
                    </Link>
                    <Link
                      to={`/update-product/${product._id}`}
                      state={`/brand/${brandname}`}
                      className='flex gap-2 items-center bg-purple-500 transition hover:bg-purple-600 px-4 py-1 text-white rounded-tl-lg rounded-br-lg rounded-tr rounded-bl'
                    >
                      Update <RxUpdate className='text-white' />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandProducts;
