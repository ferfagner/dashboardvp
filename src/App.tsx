import Menu from "./components/menu/menu"
import Main from "./components/main/main"
import './app.css'

export default function App() {
 

  return (
    <div className="container__app">
      <div className="menu">
      <Menu/>
      </div>
    
      <Main/>
     
      
    
    </div>
   
  )
}

