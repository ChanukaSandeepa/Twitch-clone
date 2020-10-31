import Header from './components/Header';
import './App.css';
import Sidebar from './components/Sidebar';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home';
import React, { useState } from 'react';
import Live from './components/Live';
import Profile from './components/Profile';

function App() {

  const [little, setLittle] = useState(false)

  const collapseHandler = () => {
    setLittle(!little)
  }

  return (
    <Router>
    <div className="App">
      <Header/>
      <div className="main-container">
        <div className={!little ? 'app-sidebar' : 'app-sidebar collapse-sidebar'}>
          <Sidebar handler={collapseHandler}/>
        </div>
        <div className={!little ? 'app-body' : 'app-body app-body-max'}>
          
            <Switch>
                <Route path="/profile" component={Profile}/>
                <Route path="/live" component={Live}/>
                <Route path="/" component={Home}/>
            </Switch>
          
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
