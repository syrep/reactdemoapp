//apparently convention is lowercase folder names?
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/counterAction";
import { login, logout } from "./actions/loginAction";

//General workflow:
// Store: stores the state
// Action: what your intended action is
// Reducer: lets you turn actions into observable changes
// Dispatch: how you actually call the action you want to use

export default function ReduxPart() {
  const counterRedux = useSelector((state) => state.counter);
  const loginRedux = useSelector((state) => state.login);
  //need useSelector to actually grab global state redux data

  const dispatch = useDispatch();
  //need useDispatch as it lets us proceed with an action

  //remember when calling the action, it is used like a function, so include the "()"

  //console.log(loginRedux);

  return (
    <div>
      <p>Counter: {counterRedux}</p>
      <div>
        Login State:
        {loginRedux ? (
          <div>
            <p>
              Logged In, view the{" "}
              <a href="https://www.youtube.com/watch?v=CVpUuw9XSjY">video</a>
            </p>
          </div>
        ) : (
          "Not Logged In"
        )}
      </div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(increment(5))}>+ 5</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <button onClick={() => dispatch(login())}>Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}
//Remember to check index.js for the other provider parts of Redux

//think about this when looking to prevent wasted renders
// https://mgmarlow.github.io/understanding-useselector-memoization
