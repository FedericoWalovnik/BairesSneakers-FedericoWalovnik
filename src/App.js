import './App.scss';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div>
      <header>
        <Navbar />
        <ItemListContainer />
      </header>
    </div>
  );
}

export default App;
