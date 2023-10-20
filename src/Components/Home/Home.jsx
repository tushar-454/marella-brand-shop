import { Helmet } from 'react-helmet';
import Banner from './Banner/Banner';
import Brands from './Brands/Brands';
import NewArrival from './NewArrival/NewArrival';
import TopSell from './TopSell/TopSell';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Marella Brand Shop</title>
      </Helmet>
      <Banner />
      <Brands />
      <TopSell />
      <NewArrival />
    </div>
  );
};

export default Home;
