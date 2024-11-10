import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <ItemListContainer greeting="Magtil Store" />
      
      <h2>Conteúdo</h2>
      
      {}
      <ItemDetailContainer />
    </div>
  );
}

export default App;

