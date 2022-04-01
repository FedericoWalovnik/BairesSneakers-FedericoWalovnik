import './App.scss';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { ThemeProvider } from '@mui/material/styles';
import theme from './material-theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <header>
          <Navbar />
          <ItemDetailContainer title={'Mens Lifestyle Shoes'} />

          <ItemListContainer title={'Mens Lifestyle Shoes'} />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
