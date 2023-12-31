
import axios from 'axios'
import { useState, useEffect } from 'react';
import './mainGeral.css'
import { FaTrophy } from 'react-icons/fa';

const baseURL = "https://easypedidos.sytes.net:8082/evento/report";





interface vendasProps {
  loginfuncionario: string;
  quantidadevenda: number;
  vl_desconto: number;
  vl_total_nf: number;
}

interface nomeLojaPorps {
  nome?: String
}




export default function MainGeral(nomeLoja: nomeLojaPorps) {

  
 const diasTrabalhadosPorFuncionario: Record<string, number> = {
    JORDHANNA: 25,
    KETILY: 25,
    DINORAR: 25,
    NATHALLY: 25,
    CAMILA: 25,
    PABLINE: 25,
    LUANA: 25,
    DAICY: 25,
MRAMALHO: 25
  };

  const [vendas, setVendas] = useState<vendasProps[]>([]);



  var date = new Date();
  var primeiroDia = new Date(date.getFullYear(), date.getMonth(), 1).toLocaleString('en-ZA').slice(0, 10).replace(/\//g, '-');
  var ultimoDia = new Date(date.getFullYear(), date.getMonth() + 1, 0).toLocaleString('en-ZA').slice(0, 10).replace(/\//g, '-');

  console.log(primeiroDia)
   console.log(ultimoDia)

  function api() {
    axios.post(`${baseURL}`, {
      databasecliente: "BancoDadosCasaVieiraPorto.fdb",
      comboempresas: `${nomeLoja.nome ? nomeLoja.nome : 'CENTRAL'}`,
    //datainicial: `2023-12-01`,
     //datafinal: `2023-12-31`,
       datainicial: `${primeiroDia}`,
      datafinal: `${ultimoDia}`,
      typerel: 2
    }, {
      auth: {
        username: "testserver",
        password: "testserver"
      }
    }
    )
      .then((response) => {
        setVendas(response.data.dados);
      });
  }


  const filteredVendas = vendas.filter(venda => venda.loginfuncionario !== 'Administrador'  && venda.loginfuncionario !== 'CAIXA');


  // Process and sort the filtered sales data
  const vendasComRelacao = filteredVendas.map(venda => ({
    ...venda,
    relacao: (((venda.vl_total_nf - venda.vl_desconto) / diasTrabalhadosPorFuncionario[venda.loginfuncionario]) * venda.quantidadevenda )/10000
  }));

  vendasComRelacao.sort((a, b) => b.relacao - a.relacao);



  const [primeiro, segundo, terceiro] = vendasComRelacao.slice(0, 3);


  useEffect(() => {


    api()


  }, []);

  if (vendas.length === 0) {
    return <div className="loading">Carregando...</div>;
  }

  return (
    <div className="App">
      <div className="podio">
        <div className="podio-item primeiro">
          <FaTrophy className="trophy-icon" />
          <span>Primeiro Lugar</span>
          <span>{primeiro.loginfuncionario}</span>
          <span>{primeiro.relacao.toFixed(2)}</span>
        </div>
        {vendasComRelacao.length > 1 && (
        <div className="podio-item segundo">
          <FaTrophy className="trophy-icon" />
          <span>Segundo Lugar</span>
          <span>{segundo.loginfuncionario}</span>
          <span>{segundo.relacao.toFixed(2)}</span>
        </div>
        )
        
      }
        {vendasComRelacao.length > 2 && (
        <div className="podio-item terceiro">
        <FaTrophy className="trophy-icon" />
        <span>Terceiro Lugar</span>
        <span>{terceiro.loginfuncionario}</span>
        <span>{terceiro.relacao.toFixed(2)}</span>
      </div>
        )
        
        }
        
      </div>
      <h1>Ranking de Vendas</h1>
      <div className="vendas-list">
        {vendasComRelacao.map((venda, index) => (
          <div key={index} className="venda-item">
            <div className="venda-info">
              <span>{venda.loginfuncionario}</span>
              <span>Quantidade de Vendas: {venda.quantidadevenda}</span>
            </div>
            <div className="relacao">{venda.relacao.toFixed(2)} Pontos</div>
          </div>
        ))}
      </div>


    </div>
  );
}
