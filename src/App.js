import { useState } from 'react';
import Banner from './components/banner/Banner.js'
import Form from './components/form/Form.js'
import Team from './components/team/Team.js';
import Footer from './components/footer/Footer.js';

function App() {

  const times = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    }
  ]

  const [colaboradores, setColaboradores] = useState([]);

  const aoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner />
      <Form times={times.map(time => time.name)} aoColaboradorCadastrado={colaborador => aoColaboradorAdicionado(colaborador)}/>
      
      {times.map(time => <Team 
      key={time.name} 
      name={time.name}
      primaryColor={time.primaryColor} 
      secondaryColor={time.secondaryColor}
      colaboradores={colaboradores.filter(colaborador => colaborador.equipe === time.name)}/>)}
      
      <Footer />
    </div>
  );
}

export default App;
