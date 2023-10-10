
import './admin.css'

import axios from 'axios'
import { useState, useEffect } from 'react';

const baseURL = "https://easypedidos.sytes.net:8083/evento/report";



interface infoempresaProps {
    dadosempresa: [dadosEmpresaProps];
    databasecliente: number;
    sucess: boolean

}

interface dadosEmpresaProps {
    identificacaointegracao: String


}

interface nomeLojaProps{
    nome?: String
}
export default function Admin(){

   
    
    useEffect(() => {


        api()


    }, []);

    const [primeiroDia, ultimoDia] = getFirstAndLastDay();
  

    function getFirstAndLastDay() {
      const date = new Date();
      const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).toISOString().slice(0, 10);
      const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).toISOString().slice(0, 10);
      return [firstDay, lastDay];
    }

    function api() {
        axios.post(`${baseURL}`, {
            databasecliente: "BancoDadosCasaVieiraPorto.fdb",
            comboempresas: 'CENTRAL',
            datainicial: `${primeiroDia}`,
            datafinal: `${ultimoDia}`,
            typerel: 8
          }, {
            auth: {
              username: "testserver",
              password: "testserver"
            }
          }
          )
            .then((response) => {
              console.log(response.data.dados);
            });
        }

 

  return (
    <div className="container__app">
      <div className="menu">
     
      </div>

      <div>
        
      </div>
      
    
    </div>
   
  )
}

