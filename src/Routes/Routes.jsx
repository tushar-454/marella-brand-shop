import { createBrowserRouter } from 'react-router-dom';
import AddProducts from '../Components/AddProducts/AddProducts';
import Cart from '../Components/Cart/Cart';
import Home from '../Components/Home/Home';
import Layout from '../Components/Layout/Layout';
import Login from '../Components/Login/Login';
import Signup from '../Components/Signup/Signup';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/add-product',
        element: <AddProducts />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
    ],
  },
]);

export default routes;
