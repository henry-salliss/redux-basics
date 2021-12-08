import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showValue = useSelector((state) => state.show);

  const toggleCounterHandler = () => {
    dispatch({ type: "TOGGLE" });
  };

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  const increaseHandler = () => {
    dispatch({ type: "INCREASE", amount: 10 });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showValue && (
        <div>
          <p className={classes.value}>{counter}</p>
          <div>
            <button onClick={incrementHandler} className={classes.button}>
              Increment
            </button>
            <button onClick={increaseHandler} className={classes.button}>
              Increase by 10
            </button>
            <button onClick={decrementHandler} className={classes.button}>
              Decrement
            </button>
          </div>
        </div>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
