import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaCcAmazonPay } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Button from '../UI/Button';
import SectionTitle from '../UI/SectionTitle';
const Cart = () => {
  const { user, setCartItemCount, signoutAccount } = useContext(AuthContext);
  const allCartProduct = useLoaderData();
  const userCart = allCartProduct.filter((product) => product.uid === user.uid);
  const [cartProduct, setCartProduct] = useState(userCart);
  const handleDeleteCart = (productId) => {
    swal({
      title: 'Are you sure?',
      text: 'Deleted your cart item !',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/carts/${user.uid}/${productId}`, {
          method: 'DELETE',
          credentials: 'include',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = cartProduct.filter(
                (product) => product._id !== productId
              );
              setCartProduct(remaining);
              setCartItemCount(remaining.length);
              swal('Delete product from cart successfully', '', 'success');
            }
          })
          .catch(() => {
            signoutAccount();
            swal('There was an error', 'try again later', 'error');
          });
      } else {
        swal('Your cart item is safe!');
      }
    });
  };

  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900/90'>
      <Helmet>
        <title>Marella | My Cart</title>
      </Helmet>
      <div className='max-w-screen-xl mx-auto p-4'>
        <div className='flex flex-col md:flex-row gap-5'>
          {/* cart  */}
          <div className='w-full md:w-2/3'>
            <SectionTitle
              displayName={'Shopping Cart'}
              style={{
                backgroundImage: 'linear-gradient(to right, #ffc505,#a200ff)',
              }}
            />

            {cartProduct?.length === 0 && (
              <div className='w-full h-screen text-3xl text-center font-semibold dark:text-slate-200 my-20'>
                No carts found . . .
              </div>
            )}
            {cartProduct?.length > 0 && (
              <div className='cartWrap my-10 space-y-10'>
                {cartProduct?.map((product, index) => (
                  <div
                    key={index}
                    className='flex gap-5 border rounded-md shadow-lg'
                  >
                    <div className='img w-1/3'>
                      <img
                        src={product.photoUrl}
                        className='w-full h-full rounded-tl-md rounded-bl-md bg-cover'
                      />
                    </div>
                    <div className='productInfo w-2/3 py-2 pr-2 space-y-2 flex flex-col'>
                      <h1 className='text-xl sm:text-3xl dark:text-slate-400'>
                        {product.proName}
                      </h1>
                      <p className='text-lg sm:text-2xl dark:text-slate-400'>
                        ${product.price}
                      </p>
                      <p className='text-md grow sm:text-xl dark:text-slate-400'>
                        {`${product.desc.slice(0, 50)} . . .`}
                      </p>
                      <Button
                        displayName={'Delete'}
                        onClick={() => handleDeleteCart(product._id)}
                        icona={<MdDeleteForever className='text-xl' />}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* checkout  */}
          <div className='w-full md:w-1/3'>
            <SectionTitle
              displayName={'Checkout'}
              style={{
                backgroundImage: 'linear-gradient(to right, #a200ff,#ffc505)',
              }}
            />
            {cartProduct.length > 0 && (
              <div className='checkoutWrap my-10'>
                <ul>
                  {cartProduct?.map((item, index) => (
                    <li
                      key={index}
                      className='text-black text-lg dark:text-slate-200'
                    >
                      {++index}. {item.proName}
                    </li>
                  ))}
                </ul>
                <hr className='my-5' />
                <p className='text-black text-lg dark:text-slate-200 my-5'>
                  Total:{' '}
                  {`$${cartProduct
                    ?.map((item) => item.price)
                    .reduce((acc, cur) => parseFloat(acc) + parseFloat(cur), 0)
                    .toFixed(2)}`}
                </p>
                <Link
                  to={'/checkout'}
                  state={{
                    payment: cartProduct
                      ?.map((item) => item.price)
                      .reduce(
                        (acc, cur) => parseFloat(acc) + parseFloat(cur),
                        0
                      )
                      .toFixed(2),
                    productLength: cartProduct.length,
                    cartProduct,
                  }}
                  className={`w-full flex gap-3 justify-center items-center py-3 rounded-md text-lg text-white bg-yellow-700 dark:bg-yellow-600`}
                >
                  Continoue to payment
                  <FaCcAmazonPay className='text-white text-2xl' />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Cart;
