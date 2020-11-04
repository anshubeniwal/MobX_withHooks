import './App.css';
import React from 'react'

function App() {

  const [username, setUsername] = React.useState('')
  const [Password, setPass] = React.useState('')

  return (


    <div className="App">
      <h1>Login</h1>
      <div>
        Username<br />
        <input value={username} onChange={(e) => setUsername(e.target.value)} /><br />
    			Password<br />
        <input value={Password} onChange={(e) => setPass(e.target.value)} />

        <hr />
        <button

        >
          Login
    			</button>

      </div>

    </div>
  );
}

export default App;
