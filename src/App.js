import Header from './components/Header';
import './App.css';
import Sidebar from './components/Sidebar';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home';
import React, { useState } from 'react';

function App() {

  const [little, setLittle] = useState(false)

  const collapseHandler = () => {
    setLittle(!little)
  }

  return (
    <div className="App">
      <Header/>
      <div className="main-container">
        <div className={!little ? 'app-sidebar' : 'app-sidebar collapse-sidebar'}>
          <Sidebar handler={collapseHandler}/>
        </div>
        <div className={!little ? 'app-body' : 'app-body app-body-max'}>
          <Router>
            <Switch>
                <Route path="/" component={Home}/>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
