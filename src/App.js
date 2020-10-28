import Header from './components/Header';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main-container">
        <div className="app-sidebar">
          <Sidebar/>
        </div>
        <div className="app-center">

        </div>
        <div className="app-chatarea">

        </div>
      </div>
    </div>
  );
}

export default App;
