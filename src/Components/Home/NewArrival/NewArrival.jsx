import { useEffect, useState } from 'react';
import hotDeals from '../../../assets/hot-deals.gif';
import SectionTitle from '../../UI/SectionTitle';

const NewArrival = () => {
  const [newArrival, setNewArrival] = useState(null);
  useEffect(() => {
    fetch('/NewArrival.json')
      .then((res) => res.json())
      .then((data) => setNewArrival(data));
  }, []);
  return (
    <div className='bg-white border-gray-200 dark:bg-gray-900/90'>
      <div className='max-w-screen-xl mx-auto p-4'>
        <SectionTitle
          displayName={'New Arrival'}
          style={{
            backgroundImage: 'linear-gradient(to right, #4b0082,#ffc0cb)',
          }}
        />
        <div className='topSellWrap grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-10'>
          {newArrival?.map((item, index) => (
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
                <p className='text-3xl text-slate-600 dark:text-slate-100 grow'>
                  ${item.price} <small>{`Stock: ${item.stock} left`}</small>
                </p>
                {item.isHot && (
                  <div className='discount absolute -top-8 -left-3'>
                    <img src={hotDeals} className='w-16 rounded-full' />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
