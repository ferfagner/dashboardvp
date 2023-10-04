import { useEffect, useState, createContext, ReactNode } from 'react';
import axios from 'axios'

const baseURL = "https://easypedidos.sytes.net:8082/evento/getdadosbdemail";



interface infoempresaProps {
    dadosempresa: [dadosEmpresaProps];
    databasecliente: number;
    sucess: boolean
  
  }
 
interface dadosEmpresaProps{
    identificacaointegracao: String
}

interface dadosProvider{
  children: ReactNode
}



export const empresaContext = createContext<infoempresaProps>({} as infoempresaProps)

export const empresaProvaider = ({children} : dadosProvider) => {
  
  const [infoempresa, setInfoempresa] = useState<infoempresaProps>({} as infoempresaProps);

  useEffect(() => {
 
  
    api()
    
    
  }, []);

  function api(){
      axios.post(`${baseURL}`, {
          "email": "andre@casavieiraporto.com",
          "senha": "123"
       },{
        auth: {
          "username": "testserver" ,
          "password": "testserver" 
        }
      }
      )
      .then((response) => {
          setInfoempresa(response.data);
          console.log('entrou')
      });
    }

  return( <empresaContext.Provider
  value={infoempresa}
  >{children}
  </empresaContext.Provider>
)
};




  