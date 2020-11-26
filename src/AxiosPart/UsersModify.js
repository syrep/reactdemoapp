import React from 'react';
import axios from 'axios';

export default class UsersModify extends React.Component{
  state = {
    usernameid: ''
  }
//todo: convert from class based to functional

handleChange = e =>{
  this.setState({usernameid: e.target.value});
};

handleSubmit = e =>{
  e.preventDefault();
  const username ={
    usernameid: this.state.usernameid
};

axios.post('https://jsonplaceholder.typicode.com/users', {username})
.then(response => {
  console.log(response);
  console.log(response.data);
});
};

  render(){
    return(
   <form onSubmit={this.handleSubmit}>
     <label>New User Name:</label>
     <input type="text" usernameid="usernameid" onChange={this.handleChange}/>
     <button type="submit">Add User Name</button>   
    <p>Check console for added username</p>
   </form>
    );
  }


}

