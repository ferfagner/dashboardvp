import Menu from "../../components/selectLoja/menu"
import Main from "../../components/main/main"
import './infovendedor.css'
import axios from 'axios'
import { useState, useEffect } from 'react';

import { useParams } from "react-router-dom";

const baseURL = "https://easypedidos.sytes.net:8083/evento/report";

interface post {
  loginfuncionario: string;
  quantidadevenda: number;
  vl_desconto: number;
  vl_total_nf: number

}

export default function InfoVendedor() {

    const {loja} = useParams();
    const nomefuncionairo = "DAICY"

    const [post, setPost] = useState<post[]>([]);
    
  
    useEffect(() => {
  
      
      api()
      
      
    }, []);

var date = new Date();
var primeiroDia = new Date(date.getFullYear(), date.getMonth(), 1).toLocaleString('en-ZA').slice(0,10).replace(/\//g,'-');
var ultimoDia = new Date(date.getFullYear(), date.getMonth() + 1, 0).toLocaleString('en-ZA').slice(0,10).replace(/\//g,'-');

console.log(primeiroDia, ultimoDia)

    



    function api(){
        axios.post(`${baseURL}`, {
          databasecliente: "BancoDadosCasaVieiraPorto.fdb",
          comboempresas:`${loja}`,
          datainicial:`${primeiroDia}`,
          datafinal:`${ultimoDia}`,
          typerel:2
        },{
          auth: {
            username: "testserver" ,
            password: "testserver" 
          }
        }
        )
        .then((response) => {
          setPost(response.data.dados);
        });
      }


  return (
    <div className="container__app">
      <div className="menu">
      <Menu 
      nome={loja}
      />
      </div>

      {
       
       post.filter(vendedor => vendedor.loginfuncionario == nomefuncionairo)
       .map(item=>
        <Main 
        loginfuncionario={item.loginfuncionario}
        vl_desconto={item.vl_desconto}
        quantidadevenda={item.quantidadevenda}
        vl_total_nf={item.vl_total_nf}
        />
        )

      }
      
     
      
    
    </div>
   
  )
}
