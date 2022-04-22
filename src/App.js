import { useEffect } from 'react'

import logo from './logo.svg';
import './App.css';

function App() {

  function fetchData(url) {
    return fetch(url)
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log("data", data);
        return data
      })
      .catch((err) => {
        console.error('Error: ', err)
      })
  }

  useEffect(() => {
    fetchData('/datajson.json')
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
