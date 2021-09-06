import React from 'react';
import './App.css';
import Form from './Components/Form';
import Dashboard from './Components/Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Form}></Route>
        <Route path="/dashboard" exact component={Dashboard}></Route>
      </Switch>
    </Router>
  );
}

export default App;
