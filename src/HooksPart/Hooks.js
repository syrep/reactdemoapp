import { useState } from "react";
import "./Hooks.css";

//first hook will be the mapping one, then need one that can be used as a boolean
// https://www.youtube.com/watch?v=mxK8b99iJTg
//for the first hook
// https://www.youtube.com/watch?v=O6P86uwfdR0
//for the second hook

//need a function component to use hook, classes use "state" instead
//hooks need to execute in the same order, so we can't use if statements for them
//usually we use a single hook per object in an array, but it really just depends on what you're doing
// single hooks then let you do various different changes on a single/multiple event/s, making the data truely uniquely modifiable
export default function Hooks() {
  const [countState, setCountState] = useState(() => {
    return 0;
  });
  //default value is placed in the useState brackets, it is an array
  //can also use simple version such as "useState(0);" which can be slower in complicated states, and you can replace 0 with
  // another function, which means that it will run that external function every time
  //the expanded function version only runs once at the start, hence why it is used in complicated states

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

  const [arrayState, setArrayState] = useState({ number: 12, letter: "f" });
  const number = arrayState.number;
  const letter = arrayState.letter;
  //in this example, we are using an array of data, so the method to play with state will be different

  function increaseNumber() {
    setArrayState((oldArray) => {
      return { number: oldArray.number + 1, letter: oldArray.letter };
      //this returns an array, with the updated value of number, and does math by pulling the old value of number from the
      // old array, then it proceeds to add "1" to it. Letter must be included, or it gets "dropped" from the state

      //in function based components, we need to add letter. But in class based states, we don't need to include it
      // as it only writes to the thing being modified. Class components get everything merged, functions just overwrite

      //To overcome this, we can also "spread" out all of the code, which you can see in the decreaseNumber
    });
  }

  function decreaseNumber() {
    setArrayState((oldArray) => {
      return { ...oldArray, number: oldArray.number - 1 };
      //This spreads out all of the old array data to be written out to again, then modifies the value we explicitly supply
    });
  }

  return (
    <div>
      <button onClick={increaseCount}>Up</button>
      <span className="counter">{countState}</span>
      <button onClick={decreaseCount}>Down</button>
      <div>
        <p>
          {number}, {letter}
        </p>
        <button onClick={increaseNumber}>Up Number</button>
        <button onClick={decreaseNumber}>Down Number</button>
      </div>
    </div>
  );
}

function HookComp({ hook, index }) {
  return <div className="hello">{hook.text}</div>;
}
