import Header from './components/Header';
import './App.css';
import Sidebar from './components/Sidebar';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main-container">
        <div className="app-sidebar">
          <Sidebar/>
        </div>
        <div className="app-body">
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
