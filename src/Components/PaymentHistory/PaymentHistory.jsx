import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import SectionTitle from '../UI/SectionTitle';

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const [paymentHistory, setPaymentHistory] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/payment-history?uid=${user.uid}`)
      .then((res) => res.json())
      .then((data) => setPaymentHistory(data));
  }, [user]);

  return (
    <section className='bg-white dark:bg-gray-900/90'>
      <div className='max-w-screen-xl mx-auto p-4'>
        <SectionTitle
          displayName={'Payment History'}
          style={{
            backgroundImage: 'linear-gradient(to right, #a200ff,#ffc505)',
          }}
        />
        <table className='w-full overflow-auto text-black border dark:text-white my-10'>
          <thead>
            <tr>
              <td className='border p-2 text-lg'>Date and time</td>
              <td className='border p-2 text-lg'>Total Money</td>
              <td className='border p-2 text-lg'>Transection ID</td>
              <td className='border p-2 text-lg'>products length</td>
            </tr>
          </thead>
          <tbody>
            {paymentHistory?.map((item, index) => (
              <tr key={index}>
                <td className='border p-1'>
                  {new Date(item.date).toLocaleString()}
                </td>
                <td className='border p-1'>{item.price}</td>
                <td className='border p-1'>{item.transactionId}</td>
                <td className='border p-1'>{item.cartIds.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PaymentHistory;
