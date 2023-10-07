
import './selectVendedor.css'

import { useParams } from "react-router-dom";
import MenuSelectVendedor from '../../components/menuSelectVendedor/menuSelectVendedor';
import MainGeral from '../../components/mainGeral/mainGeral';




export default function SelectVendedor() {
 

  const {nomeLoja} = useParams();

   


  return (
    <div className="container__app">
      <div className="menu">

      
    <MenuSelectVendedor 
    nomeLoja={nomeLoja}
    
    />

     
      
      </div>

      <MainGeral 
    nome={nomeLoja}
    />
      
     
      
    
    </div>
   
  )
}

