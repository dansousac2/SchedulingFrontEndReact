import React from 'react';
import './App.css';
import NavBar from './componentes/NavBar';
import AppRoutes from './main/AppRoutes';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <label>Evento</label>
        <NavBar />
        <AppRoutes />
      </div>
    );
  }
}
