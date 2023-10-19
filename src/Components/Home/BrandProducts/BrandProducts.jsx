import AdsSlider from './AdsSlider';

const brandProducts = [
  {
    id: 1,
    image:
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Shirt',
    brandName: 'Adidas',
    category: 'shirt',
    rating: '4.5',
    price: '70',
    desc: 'dsfsd fds sdfsddj sdfjsdklj dsjds  jd j dsjdsjdsj fdsjdsj  dsjd  dj ds jdkd ds ds dsk ldj ldsj lds sd  dkl dkjdsdsk ds ',
  },
  {
    id: 1,
    image:
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Shirt',
    brandName: 'Adidas',
    category: 'shirt',
    rating: '4.5',
    price: '70',
    desc: 'dsfsd fds sdfsddj sdfjsdklj dsjds  jd j dsjdsjdsj fdsjdsj  dsjd  dj ds jdkd ds ds dsk ldj ldsj lds sd  dkl dkjdsdsk ds ',
  },
  {
    id: 1,
    image:
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Shirt',
    brandName: 'Adidas',
    category: 'shirt',
    rating: '4.5',
    price: '70',
    desc: 'dsfsd fds sdfsddj sdfjsdklj dsjds  jd j dsjdsjdsj fdsjdsj  dsjd  dj ds jdkd ds ds dsk ldj ldsj lds sd  dkl dkjdsdsk ds ',
  },
  {
    id: 1,
    image:
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Shirt',
    brandName: 'Adidas',
    category: 'shirt',
    rating: '4.5',
    price: '70',
    desc: 'dsfsd fds sdfsddj sdfjsdklj dsjds  jd j dsjdsjdsj fdsjdsj  dsjd  dj ds jdkd ds ds dsk ldj ldsj lds sd  dkl dkjdsdsk ds ',
  },
  {
    id: 1,
    image:
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Shirt',
    brandName: 'Adidas',
    category: 'shirt',
    rating: '4.5',
    price: '70',
    desc: 'dsfsd fds sdfsddj sdfjsdklj dsjds  jd j dsjdsjdsj fdsjdsj  dsjd  dj ds jdkd ds ds dsk ldj ldsj lds sd  dkl dkjdsdsk ds ',
  },
];

const BrandProducts = () => {
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
        <div className='grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-20'>
          {brandProducts.map((product, index) => (
            <div key={index} className='border rounded-md space-y-2'>
              <img
                src={product.image}
                className='w-full rounded-tl-md rounded-tr-md'
              />
              <div className='textContent px-3 py-1'>
                <h1 className='dark:text-slate-400'>
                  <b className='text-black dark:text-slate-300'>Name:</b>{' '}
                  {product.name}
                </h1>
                <p className='dark:text-slate-400'>
                  <b className='text-black dark:text-slate-300'>Description:</b>{' '}
                  {product.desc}
                </p>
                <div className='flex justify-between items-center'>
                  <h2 className='dark:text-slate-400'>
                    <b className='text-black dark:text-slate-300'>Brand:</b>{' '}
                    {product.brandName}
                  </h2>
                  <h1 className='dark:text-slate-400'>
                    <b className='text-black dark:text-slate-300'>Price:</b> $
                    {product.price}
                  </h1>
                </div>
                <div className='flex justify-between items-center'>
                  <p className='dark:text-slate-400'>
                    <b className='text-black dark:text-slate-300'>Category:</b>{' '}
                    {product.category}
                  </p>
                  <p className='dark:text-slate-400'>
                    <b className='text-black dark:text-slate-300'>Rating:</b>{' '}
                    {product.rating}
                  </p>
                </div>
                <div className='flex justify-between items-center py-5'>
                  <button className='bg-blue-500 transition hover:bg-blue-600 px-4 py-1 text-white rounded-tl-lg rounded-br-lg rounded-tr rounded-bl'>
                    Details
                  </button>
                  <button className='bg-purple-500 transition hover:bg-purple-600 px-4 py-1 text-white rounded-tl-lg rounded-br-lg rounded-tr rounded-bl'>
                    Update
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandProducts;
