import './App.css';
import React, { useContext, useEffect } from 'react'
import { inject, observer, useObserver } from 'mobx-react';
import { StoreContext } from './index';
import { Link, Route } from 'react-router-dom';




const Login = inject("login")(observer((props) => {

  const store = useContext(StoreContext)

  const print = () => {

    alert(props.login.validation())
  };



  return (
    <div className='App'>
      <h1>Login</h1>
      <div>
        Username<br />
        <input onChange={(e) => { props.login.username = e.target.value }} /><br />
    			Password<br />
        <input onChange={(e) => { props.login.password = e.target.value }} />

        <hr />
        {props.login.validationMessage}<br />
        <button
          onClick={() => { print() }}
        //disabled={props.store.validationMessage}
        >
          Login
    			</button>

      </div>

    </div>
  )
}))

const ApiData = inject("ApiData")(observer((props) => {

  useEffect(() => {
    props.ApiData.fetchTodos()
  }, [props.ApiData.todos])

  return (
    <div className='App'>
      <h1>ApiData</h1>
      <h2>{props.ApiData.abc}</h2>
      <h3>{props.ApiData.todos}</h3>
      {/* {props.ApiData.todos.map(i => {
        <h3>{i.email}</h3>
      })} */}
    </div>
  )
}))


export default function App() {
  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/apiData">ApiData</Link>
          </li>
        </ul>
      </nav>

      { /* Route components are rendered if the path prop matches the current URL */}
      <Route path="/login"><Login /></Route>
      <Route path="/apiData"><ApiData /></Route>
    </div>
  );
}
