import MainGeral from "../../components/mainGeral/mainGeral"
import Menu from "../../components/selectLoja/menu"
import './home.css'

export default function Home() {
 

  return (
    <div className="container__app">
      <div className="menu">
      <Menu/>
      </div>

      <div>
        <MainGeral />
      </div>
      
    
    </div>
   
  )
}

