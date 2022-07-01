import React from 'react';
import './App.css';
import NavBar from './componentes/NavBar';
import AppRoutes from './main/AppRoutes';

import 'toastr/build/toastr.css';
import 'toastr/build/toastr.min.js';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <AppRoutes />
      </div>
    );
  }
}
