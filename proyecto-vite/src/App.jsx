import logo from './BUHO_EPN_big.png'
import Formulario from './componentes/Formulario';
import './App.css';

function App() {

  return (
    <>
      <img src={logo} className="App-logo" alt="logo" 
            style={{ width: '122px', height: '210px', objectFit: 'cover' }} />
      <h1> Taller React </h1>
      <div>
        <h1> Formulario </h1>
        <Formulario />
      </div>
    </>
  );
}

export default App;



