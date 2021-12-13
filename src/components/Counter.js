import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counter-slice";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showValue = useSelector((state) => state.counter.show);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
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
              Increase by 5
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
