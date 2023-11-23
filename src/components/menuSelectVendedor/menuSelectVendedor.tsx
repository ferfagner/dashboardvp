import Form from '../Form/form';
import imgUser from './../../assets/logo.png';
import './menuSelectVendedor.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const baseURL = "https://easypedidos.sytes.net:8083/evento/report";

interface ApiResponse {
  dados: vendedorProps[];
}

interface vendedorProps {
  loginfuncionario: string;
  quantidadevenda: number;
  vl_desconto: number;
  vl_total_nf: number;
}

interface dadosCompletos {
  nomeLoja?: String;
}

export default function MenuSelectVendedor({ nomeLoja }: dadosCompletos) {
  const [vendedor, setVendedor] = useState<vendedorProps[] | undefined>(undefined);

  useEffect(() => {
    api();
  }, []);
  
  const [primeiroDia, ultimoDia] = getFirstAndLastDay();
  

  function getFirstAndLastDay() {
    const date = new Date();
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).toISOString().slice(0, 10);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).toISOString().slice(0, 10);
    return [firstDay, lastDay];
  }
  console.log(primeiroDia)
  console.log(ultimoDia)
  

  function api() {
    axios.post<ApiResponse>(`${baseURL}`, {
      databasecliente: "BancoDadosCasaVieiraPorto.fdb",
      comboempresas: `${nomeLoja}`,
      datainicial: '2023-10-01',
      datafinal: '2023-10-15',
      typerel: 2
    }, {
      auth: {
        username: "testserver",
        password: "testserver"
      }
    }).then((response) => {
     
      setVendedor(response.data.dados);
    }).catch((error) => {
      console.error('Erro ao obter dados:', error);
    });
  }

  

  
  if (vendedor?.length === 0) {
    return <div className="loading">Carregando...</div>;
  }


  return (
    <div className="container__menu">
      <img
        src={imgUser}
        className='imgUser'
        alt='Imagem do usuário'
      />
      <h2 className='nomeUser'>Casa Vieira Porto</h2>
      <h3>{nomeLoja}</h3>

      <Form
        dadosVendedor={vendedor}
        rota="dashboard"
        nomeLoja={nomeLoja}
      />
    </div>
  );
}
