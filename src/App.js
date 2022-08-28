import React, { Component } from 'react'
import './App.css';

import Login from '../src/pages/Login'
import Cadastro from '../src/pages/Cadastro'
import Dashboard from './pages/Dashboard';

import Routes from'./routes';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Dashboard /> 
      </div>
    );
  }
}

/*
function App() {
  return (
    <div className="App">
      <Login /> 
    </div>
  );
}
*/
export default App;
