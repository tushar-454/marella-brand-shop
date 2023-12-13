import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BiCartDownload } from 'react-icons/bi';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Button from '../UI/Button';
const DetailsProduct = () => {
  const oneProductData = useLoaderData();
  const { proName, desc, brand, price, category, rating, photoUrl } =
    oneProductData[0];
  const { user, setCartItemCount } = useContext(AuthContext);
  const handleAddToCart = () => {
    const cartProductObj = {
      uid: user.uid,
      proName,
      desc,
      brand,
      price,
      category,
      rating,
      photoUrl,
    };

    fetch('http://localhost:5000/carts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(cartProductObj),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          swal('Product added in cart successfully.', '', 'success');
          setCartItemCount((prevNum) => prevNum + 1);
        } else {
          swal('There was an error !', '', 'error');
        }
      })
      .catch(() => swal('There was an error', 'try again later', 'error'));
  };
  return (
    <div className='bg-white border-gray-200 dark:bg-gray-900/90'>
      <Helmet>
        <title>{`Marella Brand ${brand} - ${proName}`}</title>
      </Helmet>
      <div className='max-w-screen-xl mx-auto py-10'>
        <div className='flex flex-col md:flex-row gap-3 justify-center items-start border rounded-md'>
          <div className='w-full md:w-1/2 space-y-5'>
            <img src={photoUrl} className='w-full rounded-md' />
          </div>
          <div className='textContent w-full md:w-1/2 px-3 py-1 space-y-5 my-5'>
            <h1 className='text-3xl sm:text-5xl dark:text-slate-400'>
              <b className='text-black dark:text-slate-300'>Name:</b> {proName}
            </h1>
            <p className='text-xl sm:text-2xl dark:text-slate-400'>
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
              <Rating
                initialRating={rating}
                emptySymbol={
                  <AiOutlineStar className='text-3xl text-yellow-400' />
                }
                fullSymbol={<AiFillStar className='text-3xl text-yellow-400' />}
                fractions={1}
                readonly
              />
            </div>
            <div className='flex justify-between items-center py-5'>
              <Button
                displayName={'Add to cart'}
                type={'button'}
                onClick={() => {
                  handleAddToCart();
                }}
                icona={<BiCartDownload className='text-xl' />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsProduct;
