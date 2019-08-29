import React, { Component } from 'react'
import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
// import User from './components/User';
import Counter from './components/Counter';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>A new info for me</h1>
        <Counter render={(count, incrementCount) => 
                <ClickCounter count={count} incrementCount={incrementCount}/> 
                }/>

        <Counter render={(count, incrementCount) => 
                <HoverCounter count={count} incrementCount={incrementCount}/> 
                }/>
        
      </div>
    )
  }
}
export default App;


        // {/* <ClickCounter />
        // <HoverCounter />
        // <User render={(isLoggedIn) => isLoggedIn?'Arjunn': 'Guest'} /> */}