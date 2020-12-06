//apparently convention is lowercase folder names?
import { useSelector } from "react-redux";

//General workflow:
// Store: stores the state
// Action: what your intended action is
// Reducer: lets you turn actions into observable changes
// Dispatch: how you actually call the action you want to use

export default function ReduxPart() {
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <p>hi {counter}</p>
    </div>
  );
}
//Remember to check index.js for the other provider parts of Redux
