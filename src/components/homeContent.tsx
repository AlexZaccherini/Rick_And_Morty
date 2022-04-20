// redux
import { useAppSelector, useAppDispatch } from "../hooks/reduxHooks";
import { decrement, increment } from "../redux/slices/counterSlice";

// style
import styles from "../style/home-content.module.scss";

const HomeContent = () => {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className={styles["home-content"]}>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
    </div>
  );
};

export default HomeContent;
