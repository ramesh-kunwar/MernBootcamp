import { useState } from "react";
import Card from "./Card";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Testimonials = ({ reviews }) => {
  // let review = reviews[0];
  const [review, setReview] = useState(reviews[0]);

  const [index, setIndex] = useState(0);
  const leftShiftHandler = () => {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
    // setReview(index);
    console.log(review);

    console.log(index, "index Left");
  };

  const rightShiftHandler = () => {
    if (index + 1 > reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    // setReview(index);

    console.log(index, "index right");
  };

  const surpriseHandler = () => {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  };

  return (
    <div>
      <Card review={reviews[index]}></Card>

      <div className="my-3 text-3xl text-purple-500">
        <button onClick={leftShiftHandler}>
          <IoIosArrowDropleftCircle />
        </button>
        <button onClick={rightShiftHandler}>
          <IoIosArrowDroprightCircle />
        </button>
      </div>

      <div>
        <button
          onClick={surpriseHandler}
          className="bg-purple-500  text-white px-3 py-2 rounded-lg"
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};
export default Testimonials;
