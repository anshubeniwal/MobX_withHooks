import './App.css';
import React from 'react'
import { useObserver } from 'mobx-react';

function App(props) {

  const print = () => {

    alert(props.store.validation())


  };


  return useObserver(() => (
    <div className="App">
      <h1>Login</h1>
      <div>
        Username<br />
        <input onChange={(e) => { props.store.username = e.target.value }} /><br />
    			Password<br />
        <input onChange={(e) => props.store.password = e.target.value} />

        <hr />
        {/*{props.store.validationMessage}<br/>*/}
        <button
          onClick={() => { print() }}
        //disabled={props.store.validationMessage}
        >
          Login
    			</button>

      </div>

    </div>
  ))
}

export default App;
