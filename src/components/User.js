import React, { Component } from 'react'

export default class User extends Component {
 render() {
  return (
   <div>
      <h1>{this.props.render(false)}</h1>
   </div>
  )
 }
}
