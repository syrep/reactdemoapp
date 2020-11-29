import React from 'react';
import axios from 'axios';

export default class Users extends React.Component{
  state = {
    users: []
  }
//todo: convert from class based to functional

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response =>{
      //console.log(response);
      this.setState({users: response.data});
    })
  }

  render(){
    return(
    <ul>{this.state.users.map(user => <li key={user.id}>Name: {user.name}, ID: {user.id}</li>)}</ul>
    )
  }


}

