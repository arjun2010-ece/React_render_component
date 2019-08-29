import React, { Component } from 'react';

class HoverCounter extends Component {
 render() {
  return (
   <div>
      <h2 onMouseOver={this.props.incrementCount}>
       hovered {this.props.count} times</h2>
   </div>
  )
 }
}


export default HoverCounter;