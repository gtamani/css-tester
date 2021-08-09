import logo from './logo.svg';
import './App.css';
import Shadow from './components/Shadow';
import Cursor from './components/Cursor';
import Filter from './components/Filter';
import Borders from './components/Borders';
import Gradient from './components/Gradient';
import Transform from './components/Transform';
import Fonts from './components/Fonts';

function App() {
  return (
    <div className="App">
      
      <Shadow/>
      <Borders/>
      <Gradient/>
      <Transform/>
      <Fonts/>
      <Filter/>
      <Cursor/>
    </div>
  );
}

export default App;
