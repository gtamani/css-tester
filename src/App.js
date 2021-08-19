import './App.css';
import Shadow from './components/Shadow';
import Cursor from './components/Cursor';
import Filter from './components/Filter';
import Borders from './components/Borders';
import Gradient from './components/Gradient';
import Transform from './components/Transform';
import Fonts from './components/Fonts';
import ObjectFit from './components/ObjectFit';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      
      <Shadow/>
      <Borders/>
      <Gradient/>
      <Transform/>
      <Fonts/>
      <Filter/>
      <ObjectFit/>
      <Cursor/>
      <Display/>
    </div>
  );
}

export default App;
