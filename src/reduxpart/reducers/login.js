const loginReducer = (state = false, action) => {
  switch (action.type) {
    case "Login":
      return true;
    case "Logout":
      return false;
    default:
      return false;
    //default is just in case it fails in some way, we force a logout
  }
};

export default loginReducer;
