import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      
      <ItemListContainer greeting=" Meu ItemListContainer " />

      <h2>Conteúdo</h2>
    </div>
  );
}

export default App;
