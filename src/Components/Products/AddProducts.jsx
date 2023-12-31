import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { BiCartDownload } from 'react-icons/bi';
import swal from 'sweetalert';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Button from '../UI/Button';
import Input from '../UI/Input';
import SectionTitle from '../UI/SectionTitle';
import TextArea from '../UI/TextArea';
const productInit = {
  proName: '',
  desc: '',
  brand: '',
  price: '',
  category: '',
  rating: '',
  photoUrl: '',
};
const errorInit = {
  proName: '',
  desc: '',
  brand: '',
  price: '',
  category: '',
  rating: '',
  photoUrl: '',
};
const AddProducts = () => {
  const [addProduct, setAddProduct] = useState({ ...productInit });
  const { signoutAccount } = useContext(AuthContext);
  const [error, setError] = useState({ ...errorInit });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setAddProduct((prevObj) => ({ ...prevObj, [name]: value }));
    setError((prevObj) => ({ ...prevObj, [name]: '' }));
  };
  const handleAddProductForm = (e) => {
    e.preventDefault();
    const { proName, desc, brand, price, category, rating, photoUrl } =
      addProduct;
    if (!proName) {
      setError((prevError) => ({
        ...prevError,
        proName: 'Product name required.',
      }));
      return;
    }
    if (!brand) {
      setError((prevError) => ({
        ...prevError,
        brand: 'Brand name required.',
      }));
      return;
    }
    if (!category) {
      setError((prevError) => ({
        ...prevError,
        category: 'Product category required.',
      }));
      return;
    }
    if (!price) {
      setError((prevError) => ({
        ...prevError,
        price: 'Product price required.',
      }));
      return;
    } else if (price < 0) {
      setError((prevError) => ({
        ...prevError,
        price: 'Product price must be greater then 0.',
      }));
      return;
    }
    if (!rating) {
      setError((prevError) => ({
        ...prevError,
        rating: 'Product rating required.',
      }));
      return;
    } else if (rating < 0 || rating > 5) {
      setError((prevError) => ({
        ...prevError,
        rating: 'Product rating will be 0.0 - 5.0',
      }));
      return;
    }
    if (!photoUrl) {
      setError((prevError) => ({
        ...prevError,
        photoUrl: 'Product photo url required.',
      }));
      return;
    }
    if (!desc) {
      setError((prevError) => ({
        ...prevError,
        desc: 'Product description required.',
      }));
      return;
    }
    const newProductObject = {
      proName,
      brand: brand.charAt(0).toUpperCase() + brand.slice(1),
      category,
      price,
      rating,
      photoUrl,
      desc,
    };
    fetch('https://brand-shop-server-olive.vercel.app/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(newProductObject),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          swal('Product added succssfully', '', 'success');
          setAddProduct({ ...productInit });
        } else {
          swal('There was an error', 'try again later', 'error');
        }
      })
      .catch(() => {
        signoutAccount();
        swal('There was an error', 'try again later', 'error');
      });
  };
  return (
    <div className='bg-white border-gray-200 dark:bg-gray-900/90'>
      <Helmet>
        <title>Marella | Add Product</title>
      </Helmet>
      <div className='max-w-screen-xl mx-auto p-4 '>
        <SectionTitle
          displayName={'Add product'}
          style={{ backgroundImage: 'linear-gradient(to right, red,yellow)' }}
        />
        <form
          className='w-full my-10 space-y-4'
          onSubmit={handleAddProductForm}
        >
          <div className='w-full flex flex-col sm:flex-row gap-5'>
            <Input
              displayName={'Product Name'}
              type={'text'}
              id={'proName'}
              name={'proName'}
              placeholder={'t-shirt for women'}
              onChange={handleInput}
              value={addProduct.proName}
              error={error.proName}
            />
            {/* <Input
              displayName={'Brand Name'}
              type={'text'}
              id={'brand'}
              name={'brand'}
              placeholder={'Nike'}
              onChange={handleInput}
              value={addProduct.brand}
              error={error.brand}
            /> */}
            <div className='w-full flex flex-col gap-2'>
              <label
                htmlFor='brand'
                className='text-black dark:text-slate-200 font-semibold text-xl'
              >
                Brand Name
              </label>
              <div className='relative'>
                <select
                  name='brand'
                  id='brand'
                  onChange={handleInput}
                  value={addProduct.brand}
                  className={`w-full border focus:border-slate-400 text-black text-lg outline-none p-3 rounded bg-white dark:bg-slate-300`}
                >
                  <option value=''>Select your brand</option>
                  <option value='Adidas'>Adidas</option>
                  <option value='Gucci'>Gucci</option>
                  <option value='H&m'>H&M</option>
                  <option value='Levis'>Levi&apos;s</option>
                  <option value='Nike'>Nike</option>
                  <option value='Zara'>Zara</option>
                </select>
                <p className='text-red-500'>{error.brand}</p>
              </div>
            </div>
          </div>
          <div className='w-full flex flex-col sm:flex-row gap-5'>
            <Input
              displayName={'Category'}
              type={'text'}
              id={'category'}
              name={'category'}
              placeholder={'t-shirt'}
              onChange={handleInput}
              value={addProduct.category}
              error={error.category}
            />
            <Input
              displayName={'Price'}
              type={'number'}
              id={'price'}
              name={'price'}
              placeholder={'$789'}
              onChange={handleInput}
              value={addProduct.price}
              error={error.price}
            />
            <Input
              displayName={'Rating'}
              type={'number'}
              id={'rating'}
              name={'rating'}
              placeholder={'4.6'}
              onChange={handleInput}
              value={addProduct.rating}
              error={error.rating}
            />
          </div>
          <Input
            displayName={'Photo Url'}
            type={'url'}
            id={'photoUrl'}
            name={'photoUrl'}
            placeholder={'www.myimage.com'}
            onChange={handleInput}
            value={addProduct.photoUrl}
            error={error.photoUrl}
          />
          <TextArea
            displayName={'Description'}
            type={'text'}
            id={'desc'}
            name={'desc'}
            placeholder={
              'this is nice t shirt import form japan good cloth and duraable'
            }
            onChange={handleInput}
            value={addProduct.desc}
            error={error.desc}
          />
          <Button
            displayName={'Add Product'}
            type={'submit'}
            icona={<BiCartDownload className='text-xl' />}
          />
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
