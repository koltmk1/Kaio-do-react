import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <img src='../assets/images/pikachuu.png' alt='imagem'/>
      <h1>aggajgauw</h1>
      <Link to={'/contato'}>contato</Link>
    </div>
  );
}

export default App;
