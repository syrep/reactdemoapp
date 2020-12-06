import { useState } from "react";
import "./Hooks.css";

//first hook will be the mapping one, then need one that can be used as a boolean
// https://www.youtube.com/watch?v=mxK8b99iJTg

// https://www.youtube.com/watch?v=O6P86uwfdR0
//for the hooks that are simple arrays

//need a function component to use hook, classes use "state" instead
//hooks need to execute in the same order, so we can't use if statements for them
//usually we use a single hook per object in an array, but it really just depends on what you're doing
// single hooks then let you do various different changes on a single/multiple event/s, making the data truely uniquely modifiable
export function HooksFunc() {
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
      <div className="spacer">
        <button onClick={increaseNumber}>Up Number</button>
        <span className="counter">
          {number}, {letter}
        </span>
        <button onClick={decreaseNumber}>Down Number</button>
      </div>
    </div>
  );
}

/// the below is where the modifiable useState stuff is done. It is independant of the stuff above
/// this is really annoying to figure out
/// it has some changes and explanations that were not in the videos, so it was a good learning exercise

function ListItem({ item, index, modifyArray, deleteArray }) {
  return (
    <li
      style={{ textDecoration: item.isModified ? "line-through" : "" }}
      className="list-item"
    >
      {item.text}
      <button onClick={() => modifyArray(index)}>Modify</button>
      <button onClick={() => deleteArray(index)}>Delete</button>
    </li>
  );
  //text decoration is based on a ternary? statement, basically the syntax is "if XYZ ? true=action : else=action"
  // in this specific case
}

function AddListItem({ addItem }) {
  const [newItem, setNewItem] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <form onSubmit={handleAdd}>
      <input
        type="text"
        value={newItem}
        placeholder="add new item"
        onChange={(e) => setNewItem(e.target.value)}
      ></input>
    </form>
  );
}

export function HookComp() {
  const [arrayList, setArrayList] = useState([
    {
      text: "first item",
      isModified: false,
    },
    {
      text: "second item",
      isModified: true,
    },
    {
      text: "third item",
      isModified: false,
    },
  ]);

  const addItem = (text) => {
    const newValues = [...arrayList, { text }];
    setArrayList(newValues);
  };

  const modifyArray = (index) => {
    const newValues = [...arrayList];
    //newValues[index].isModified = true;
    //setArrayList(newValues);

    //the commented out way would only work for strike-through, but the way below allows for undoing the change
    if (newValues[index].isModified) {
      return (newValues[index].isModified = false), setArrayList(newValues);
    }
    {
      return (newValues[index].isModified = true), setArrayList(newValues);
    }
    //this if statement works by assessing if the isModified == true, then sets it to false, else it sets it true
    //we need to call the setState function within the block otherwise it can't access the changed value
  };

  const deleteArray = (index) => {
    ///const newValues = [...arrayList];
    ///newValues.splice(index, 1);
    //puts "cursor" at index, then splices 1 position. Look it up for more information if needed.

    ///setArrayList(newValues);
    // the triple slash comments are what was previously there, but the new filter method does not mutate the array

    const deletedItem = Array.from(arrayList.filter((items, i) => i !== index));
    //the filter can take in the callback function with the array (items) and the index (i), then we
    // are checking if the index does not equal the index of the item we are deleting, so we can exclude
    // it from the new array. After that, we set state equal to this new array (non-mutated)
    setArrayList(deletedItem);
  };

  return (
    <div className="comp-container">
      <div className="array-list">
        <ul>
          {arrayList.map((item, index) => (
            <ListItem
              key={index}
              index={index}
              item={item}
              modifyArray={modifyArray}
              deleteArray={deleteArray}
            />
          ))}
          <AddListItem addItem={addItem} />
        </ul>
      </div>
    </div>
  );
}
