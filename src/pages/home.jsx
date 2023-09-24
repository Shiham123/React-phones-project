import { useLoaderData } from 'react-router-dom';
import Banner from '../components/banner';
import Phones from '../components/phones';

const Home = () => {
  const phonesData = useLoaderData();

  return (
    <div>
      <Banner />
      <Phones phonesData={phonesData} />
    </div>
  );
};

export default Home;
