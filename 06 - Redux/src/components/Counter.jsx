import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/slices/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>Counter App</h1>

      <button onClick={handleIncrement} className="btn btn-danger">
        Decrement
      </button>
      <div className="my-5">
        <h3>{count}</h3>
      </div>
      <button onClick={handleDecrement} className="btn btn-success">
        Increment
      </button>
    </div>
  );
};
export default Counter;
