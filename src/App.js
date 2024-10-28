import { useState } from 'react';
import Banner from './components/banner/Banner.js'
import Form from './components/form/Form.js'

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const aoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner />
      <Form aoColaboradorCadastrado={colaborador => aoColaboradorAdicionado(colaborador)}
      />
    </div>
  );
}

export default App;
