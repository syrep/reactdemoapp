import { useState } from "react";
import "./Hooks.css";

//first hook will be the mapping one, then need one that can be used as a boolean
// https://www.youtube.com/watch?v=mxK8b99iJTg
//for the first hook
// https://www.youtube.com/watch?v=O6P86uwfdR0
//for the second hook

//need a function component to use hook, classes use "state" instead
//hooks need to execute in the same order, so we can't use if statements for them
export default function Hooks() {
  const [countState, setCountState] = useState(0);
  //default value is placed in the useState brackets

  function increaseCount() {
    //setCountState(countState + 1);
    //this way shouldn't be used, as if it were to be repeated, it would use the old countState because the function
    // hasn't finished, so the state doesn't appear changed. It would then be the same equation and answer

    setCountState((oldCount) => oldCount + 1);
    //this allows you to re-render the function, in the event you need to call the setCountState function again
    //this uses the function method of setting state, similar to classes, as it passes in the state object as a number
    // then updates it, so when the next setCountState tries to run, it uses the updated number
  }

  function decreaseCount() {
    setCountState((oldCount) => oldCount - 1);
  }

  return (
    <div>
      <button onClick={increaseCount}>Up</button>
      <span className="counter">{countState}</span>
      <button onClick={decreaseCount}>Down</button>
    </div>
  );
}

function HookComp({ hook, index }) {
  return <div className="hello">{hook.text}</div>;
}
