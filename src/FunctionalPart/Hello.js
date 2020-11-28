import React, { Component } from 'react';


export const Hello = () => {
  return(<h2>Hello 'name'</h2>)
}

export function Hello2(props){
  return(<h2>Hello2 {props.age}</h2>)
}

export function Hello3({name}){
  return(<h2>Hello3 {name}</h2>)
}

export class Hello4 extends Component{
  render(){
    /* Can destructure here like in Hello3
    this is done by:
    const {class} = this.props
    */
    return(
      <h2>Hello4 {this.props.class}</h2>
    )
  }
}

export class Hello5 extends Component{
  render(){
    const {work} = this.props
    return(
      <h2>Hello5 {this.props.work}</h2>
    )
  }
}