import Phone from './phone';

const Phones = (props) => {
  const { phonesData } = props;
  return (
    <div className="py-10">
      <h1 className="text-2xl text-center">All categories phones</h1>
      <div>
        {phonesData?.map((phone, index) => {
          return <Phone key={index} phone={phone} />;
        })}
      </div>
    </div>
  );
};

export default Phones;
