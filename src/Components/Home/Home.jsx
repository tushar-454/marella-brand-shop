import Banner from './Banner/Banner';
import Brands from './Brands/Brands';
import NewArrival from './NewArrival/NewArrival';
import TopSell from './TopSell/TopSell';

const Home = () => {
  return (
    <div>
      <Banner />
      <Brands />
      <TopSell />
      <NewArrival />
    </div>
  );
};

export default Home;
