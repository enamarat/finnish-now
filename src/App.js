import suomi from './suomi.png';
import gear from './gear.png';
import './App.css';
import Sections from './components/sections.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Finnish Now!</h1>
        <img src={gear} className="App-logo" alt="logo" />
        <img src={suomi} className="flag" alt="flag"/>
      </header>
      <Sections />
    </div>
  );
}

export default App;
