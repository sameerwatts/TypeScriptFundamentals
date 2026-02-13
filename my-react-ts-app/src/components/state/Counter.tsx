import { useReducer } from "react";

type CounterStateProps = {
  count: number;
};

type ResetActionProps = {
  type: "reset";
  payload?: number;
};

type UpdateActionProps = {
    type: "increment" | "decrement";
    payload: number
}

const initialState = { count: 0 };

function reducer(state: CounterStateProps, action: ResetActionProps | UpdateActionProps) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increament by 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement by 10
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};

export default Counter;
