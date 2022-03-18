import './App.scss';
import Button from '@mui/material/Button';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div>
      <header>
        <Navbar />
        <ItemListContainer title={'ItemListContainer Component Title'} />

        <h1>
          Baires Sneakers Ecommerce
        </h1>
        <Button variant="outlined">Material UI Button</Button>
      </header>
    </div>
  );
}

export default App;
