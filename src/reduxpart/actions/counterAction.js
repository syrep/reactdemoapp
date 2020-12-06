export const increment = () => {
  return {
    type: "Increment",
  };
};
export const decrement = () => {
  return {
    type: "Decrement",
  };
};
//these functions just give the type of actions a name that can be returned,
// and this name is then checked by the reducer to see what to do

//therefore the workflow is:
// call dispatch(action) -> action file with name -> name in reducer ->
// reducer function -> result
