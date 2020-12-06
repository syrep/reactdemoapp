export const increment = (deltaAmount = 1) => {
  return {
    type: "Increment",
    payload: deltaAmount,
  };
};
//the "prop" getting passed in (deltaAmount) now has a default value
// set to "1", however if present in the dispatch(action(XXX)),
// it will pass the value through
export const decrement = (deltaAmount = 1) => {
  return {
    type: "Decrement",
    payload: deltaAmount,
  };
};
//these functions just give the type of actions a name that can be returned,
// and this name is then checked by the reducer to see what to do

//therefore the workflow is:
// call dispatch(action) -> action file with name -> name in reducer ->
// reducer function -> result
