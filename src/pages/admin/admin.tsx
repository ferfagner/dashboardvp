import './admin.css'
import axios from 'axios'
import { useEffect, useState } from 'react';

const baseURL = "https://easypedidos.sytes.net:8083/evento/report";

interface Dados {
  mes: string;
  total: number;
}




export default function Admin() {
  const [data, setData] = useState<Dados[]>([]);
  const [primeiroDia, setPrimeiroDia] = useState<string>('');
  const [ultimoDia, setUltimoDia] = useState<string>('');

  function handleFormSubmit(event: React.FormEvent) {
    event.preventDefault();
    api();
  }

  function api() {
    axios.post(`${baseURL}`, {
      databasecliente: "BancoDadosCasaVieiraPorto.fdb",
      comboempresas: 'CENTRAL',
      datainicial: `2023-10-16`,
      datafinal: `2023-10-16`,
      typerel: 2
    }, {
      auth: {
        username: "testserver",
        password: "testserver"
      }
    })
    .then((response) => {
      const responseData: Dados[] = response.data.dados; // Usando a interface Dados
      const formattedData = responseData.map((item) => ({
        mes: item.mes,
        total: item.total
      }));
      setData(formattedData);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  useEffect(() => {
    
  }, []);
  console.log(primeiroDia)

  console.log(data)

  return (
    <form onSubmit={handleFormSubmit}>
    <label htmlFor="dataInicial">Data Inicial:</label>
    <input 
      type="date" 
      id="dataInicial" 
      value={primeiroDia} 
      onChange={(e) => setPrimeiroDia(e.target.value)} 
      onFocus={(e) => e.target.type = 'date'}
      onBlur={(e) => e.target.type = 'text'}
    />
    <label htmlFor="dataFinal">Data Final:</label>
    <input 
      type="date" 
      id="dataFinal" 
      value={ultimoDia} 
      onChange={(e) => setUltimoDia(e.target.value)} 
      onFocus={(e) => e.target.type = 'date'}
       onBlur={(e) => e.target.type = 'text'}
    />
    <button type="submit">Enviar</button>
  </form>
  );
}
