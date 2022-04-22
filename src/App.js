import { useEffect } from 'react'
import XMLParser from 'react-xml-parser'

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

  function fetchXML(url) {
    return fetch(url)
      .then(res => {
        return res.text()
      })
      .then(data => {
        var xml = new XMLParser().parseFromString(data);
        console.log("xml", xml.children)
      })
      .catch((err) => {
        console.error('Error: ', err)
      })
  }

  useEffect(() => {
    fetchData('/datajson.json')
    fetchXML('/dataxml.xml')
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
