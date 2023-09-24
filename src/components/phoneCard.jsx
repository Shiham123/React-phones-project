import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from '@material-tailwind/react';

const PhoneCard = (props) => {
  const { phone } = props;
  const { id, image, phone_name, brand_name, price, rating } = phone;

  // local storage item
  const handleAddToCart = () => {
    const favoritesArray = [];
    const favoritesItem = JSON.parse(localStorage.getItem('phone'));

    if (!favoritesItem) {
      favoritesArray.push(phone);
      localStorage.setItem('phone', JSON.stringify(favoritesArray));
      alert('phone added');
    } else {
      const exit = favoritesItem.find((phone) => phone.id === id);

      if (!exit) {
        favoritesArray.push(...favoritesItem, phone);
        localStorage.setItem('phone', JSON.stringify(favoritesArray));
        alert('products added');
      } else {
        alert('already added');
      }
    }
  };

  return (
    <div>
      <Card className="w-full max-w-[48rem] flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={image}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            {phone_name}
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {brand_name}
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            {price} - {rating}
          </Typography>
          <a href="#" className="inline-block">
            <Button
              onClick={handleAddToCart}
              variant="text"
              className="flex items-center gap-2"
            >
              ADD TO CART
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardBody>
      </Card>
    </div>
  );
};

export default PhoneCard;
