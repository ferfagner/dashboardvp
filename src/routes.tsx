
import { Route, BrowserRouter, Routes} from "react-router-dom";

import Home from "./pages/home/home";
import InfoVendedor from "./pages/infoVendedor/infovendedor";


export default function Rotas() {

   return(
       <BrowserRouter>
           <Routes>
           <Route path="/" element={<Home/>}  />
           <Route path="/info/:loja" element={<InfoVendedor/>}  />
           </Routes>
       </BrowserRouter>
   )
}

