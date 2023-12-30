import { FaQuoteLeft, FaQuoteRight, FaGem } from "react-icons/fa";

const Card = ({ review }) => {
  return (
    <div className="container">
      <div className="text-center">
        <img src={review.image} alt="" className="rounded-full w-20 mx-auto " />
      </div>
      <div>
        <p className="text-gray-500 font-bold">{review.name}</p>
      </div>

      <div>
        <p>{review.job}</p>
      </div>
      <div className="my-3">
        <FaQuoteLeft className=" mx-auto" />
        <p className="text-gray-500">{review.text}</p>
        <FaQuoteRight className="mx-auto" />
      </div>
    </div>
  );
};
export default Card;
