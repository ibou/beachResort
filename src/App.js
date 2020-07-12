import React from 'react';
import './App.css';
import Rooms from './pages/Rooms';
import Error from './pages/Error';
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom';
import SingleRoom from './pages/SingleRoom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
