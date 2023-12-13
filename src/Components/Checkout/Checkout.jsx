import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import SectionTitle from '../UI/SectionTitle';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Checkout = () => {
  const { payment, productLength, cartProduct } = useLocation().state;
  return (
    <section className='bg-white dark:bg-gray-900/90'>
      <div className='max-w-screen-xl mx-auto p-4'>
        <SectionTitle
          displayName={'Checkout'}
          style={{
            backgroundImage: 'linear-gradient(to right, #a200ff,#ffc505)',
          }}
        />
        <p className='text-xl my-5 dark:text-white'>
          Your have total <span className='font-black'>{productLength}</span>{' '}
          product. Your Total payment -{' '}
          <span className='font-black'>{payment} $</span>
        </p>
        <div className='min-h-screen'>
          <div className='max-w-screen-lg mx-auto'>
            <div>
              <Elements stripe={stripePromise}>
                <CheckoutForm payment={payment} cartProduct={cartProduct} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;

const CheckoutForm = ({ payment, cartProduct }) => {
  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const { user, setRefreshCart, reFreshCard } = useContext(AuthContext);
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (payment > 0) {
      fetch(`http://localhost:5000/create-payment-intent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ price: payment }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }
  }, [payment]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    const card = elements.getElement(CardElement);
    if (card == null) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    if (error) {
      setError(error.message);
    } else {
      console.log('payment method', paymentMethod);
      setError('');
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user.email,
            name: user.displayName,
          },
        },
      });
    if (confirmError) {
      console.log('confirm error', confirmError);
    } else {
      console.log('payment Intent ', paymentIntent);
      if (paymentIntent.status === 'succeeded') {
        // now save the payment in the database
        const paymentInfo = {
          price: payment,
          date: new Date(),
          transactionId: paymentIntent.id,
          cartIds: cartProduct.map((item) => item._id),
          uid: user.uid,
        };

        fetch(`http://localhost:5000/payments`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({ payment: paymentInfo }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.paymentResult.acknowledged) {
              swal(
                'Payment successfull.',
                `Your transactionId - ${paymentIntent.id}`,
                'success'
              );
              setRefreshCart(!reFreshCard);
              navigate('/payment-history');
            } else {
              swal('There was an error.', '', 'error');
            }
          });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button
        type='submit'
        className='w-24 inline-block py-3 rounded-md text-lg text-white bg-yellow-700 dark:bg-yellow-600 my-5'
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className='text-red-500'>{error}</p>
    </form>
  );
};
