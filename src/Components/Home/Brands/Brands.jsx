import { Link } from 'react-router-dom';
import SectionTitle from '../../UI/SectionTitle';

const brands = [
  {
    id: 1,
    image: 'https://i.postimg.cc/fRXFcmq2/adidas-brand.png',
    brandName: 'Adidas',
    path: 'adidas',
    desc: '',
  },
  {
    id: 2,
    image: 'https://i.postimg.cc/FzBqZZQq/gucci-brand.png',
    brandName: 'Gucci',
    path: 'gucci',
    desc: '',
  },
  {
    id: 3,
    image: 'https://i.postimg.cc/ncXNL64t/hm-brand.png',
    brandName: 'H&M',
    path: 'hm',
    desc: '',
  },
  {
    id: 4,
    image: 'https://i.postimg.cc/SNH3YDdY/levi-brand.png',
    brandName: "Levi's",
    path: 'levis',
    desc: '',
  },
  {
    id: 5,
    image: 'https://i.postimg.cc/MZPhqWjD/nike-brand.png',
    brandName: 'Nike',
    path: 'nike',
    desc: '',
  },
  {
    id: 6,
    image: 'https://i.postimg.cc/Bv0zMbdq/zara-brand.png',
    brandName: 'Zara',
    path: 'zara',
    desc: '',
  },
];

const Brands = () => {
  return (
    <div className='bg-white border-gray-200 dark:bg-gray-900/90'>
      <div className='max-w-screen-xl mx-auto p-4'>
        <SectionTitle
          displayName={'Our Brands'}
          style={{
            backgroundImage: 'linear-gradient(to right, #ffc505,#a200ff)',
          }}
        />
        {/* brands wrap */}
        <div className='grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 my-10'>
          {brands.map((brand, index) => (
            <div
              key={index}
              className='group border rounded-lg px-5 py-10 md:py-0 flex flex-col items-center cursor-pointer'
            >
              <Link to={`/brand/${brand.path}`} className='px-5 py-10 md:py-0'>
                <img
                  src={brand.image}
                  alt={brand.brandName}
                  className='h-[200px] object-contain dark:invert'
                />
                <h1 className='text-5xl text-slate-500 group-hover:text-slate-700 dark:text-slate-200 transition font-bold pt-10 lg:pt-0 pb-10'>
                  {brand.brandName}
                </h1>
                <p>{brand.desc}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
