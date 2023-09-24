import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import PhoneCard from './phoneCard';

const PhoneDetails = () => {
  const [phone, setPhone] = useState({});
  const [isTrue, setIsTrue] = useState(false);

  const params = useParams();
  const { id } = params;

  const phonesData = useLoaderData();

  useEffect(() => {
    const findPhone = phonesData.find((phone) => phone.id === id);
    setPhone(findPhone);
  }, [id, phonesData, isTrue]);

  return (
    <div>
      <button onClick={() => setIsTrue(!isTrue)}>Click me</button>
      <PhoneCard phone={phone} />
    </div>
  );
};

export default PhoneDetails;
