import { createBrowserRouter } from 'react-router-dom';
import AddProducts from '../Components/AddProducts/AddProducts';
import UpdateProducts from '../Components/AddProducts/UpdateProducts';
import Cart from '../Components/Cart/Cart';
import BrandProducts from '../Components/Home/BrandProducts/BrandProducts';
import Home from '../Components/Home/Home';
import Layout from '../Components/Layout/Layout';
import Login from '../Components/Login/Login';
import NoRoute from '../Components/NoRoute/NoRoute';
import Signup from '../Components/Signup/Signup';
import PrivateRoutes from '../PriPubRoutes/PrivateRoutes';
import PublicRoute from '../PriPubRoutes/PublicRoute';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NoRoute />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/add-product',
        element: (
          <PrivateRoutes>
            <AddProducts />
          </PrivateRoutes>
        ),
      },
      {
        path: '/cart',
        element: (
          <PrivateRoutes>
            <Cart />
          </PrivateRoutes>
        ),
      },
      {
        path: '/login',
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: '/signup',
        element: (
          <PublicRoute>
            <Signup />
          </PublicRoute>
        ),
      },
      {
        path: '/brand/:brandname',
        element: (
          <PrivateRoutes>
            <BrandProducts />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/brand/${params.brandname}`),
      },
      {
        path: '/update-product/:productId',
        element: (
          <PrivateRoutes>
            <UpdateProducts />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/update-product/${params.productId}`),
      },
    ],
  },
]);

export default routes;
