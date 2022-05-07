import logo from './logo.svg';
import './App.css';
import Sections from './components/sections.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Sections />
    </div>
  );
}

export default App;
