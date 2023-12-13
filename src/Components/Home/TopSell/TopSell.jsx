import { useContext, useEffect, useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Rating from 'react-rating';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import SectionTitle from '../../UI/SectionTitle';

const TopSell = () => {
  const [topSell, setTopSell] = useState(null);
  const { signoutAccount } = useContext(AuthContext);
  useEffect(() => {
    fetch('/TopSell.json')
      .then((res) => res.json())
      .then((data) => setTopSell(data))
      .catch(() => {
        signoutAccount();
      });
  }, [signoutAccount]);
  return (
    <div className='bg-white border-gray-200 dark:bg-gray-900/90'>
      <div className='max-w-screen-xl mx-auto p-4'>
        <SectionTitle
          displayName={'Top Sell'}
          style={{
            backgroundImage: 'linear-gradient(to right, #B2C19B,#66748D)',
          }}
        />
        <div className='topSellWrap grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-10'>
          {topSell?.map((item, index) => (
            <div key={index} className='flex flex-col relative'>
              <div className='w-full overflow-hidden'>
                <img
                  src={item.image}
                  className='w-full transition hover:scale-110'
                />
              </div>
              <div className='bg-slate-100/50 p-5 dark:bg-slate-600 grow flex flex-col space-y-3'>
                <h1 className='text-2xl text-slate-600 dark:text-slate-100'>
                  {item.name}
                </h1>
                <Rating
                  initialRating={item.rating}
                  emptySymbol={
                    <AiOutlineStar className='text-xl text-yellow-400' />
                  }
                  fullSymbol={
                    <AiFillStar className='text-xl text-yellow-400' />
                  }
                  readonly
                />
                <p className='text-3xl text-slate-600 dark:text-slate-100 grow'>
                  ${item.salePrice}{' '}
                  <sub className='text-slate-300'>
                    <del>${item.price}</del>
                  </sub>
                </p>
                <div className='discount absolute -top-8 -left-3'>
                  <span className='flex flex-col justify-center items-center w-20 h-20 text-xl bg-red-500 text-white rounded-full'>
                    {`${(
                      ((item.price - item.salePrice) / item.price) *
                      100
                    ).toFixed()}%`}
                    <small className=''>OFF</small>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSell;
