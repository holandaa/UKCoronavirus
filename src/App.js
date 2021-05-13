import React, { useEffect, useState } from 'react';
import './App.css';
import ListaCoronaVirusUK from './componentes/ListaCoronaVirusUK';
import hoc from './componentes/hoc';

function App() {
  const CarregandoDados = hoc(ListaCoronaVirusUK);
  const [estadoDaAplicacao, setEstadoDaAplicacao] = useState({
    consultando: false,
    dados: null,
  });

  useEffect(() => {
    setEstadoDaAplicacao({ consultando: true });
    const apiUrl = `https://api.coronavirus.data.gov.uk/v1/data`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setEstadoDaAplicacao({ consultando: false, dados: repos.data });
      });
  }, [setEstadoDaAplicacao]);
  
  return (
    <div className='App'>
        <CarregandoDados isLoading={estadoDaAplicacao.consultando} dados={estadoDaAplicacao.dados} />
    </div>
  );
}
export default App;
