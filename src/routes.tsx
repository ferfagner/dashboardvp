
import { Route, BrowserRouter, Routes} from "react-router-dom";

import Home from "./pages/home/home";
import SelectVendedor from "./pages/selectVendedor/selectVendedor";
import Dashboard from "./pages/deshboard/dashboard";


export default function Rotas() {

   return(
       <BrowserRouter>
           <Routes>
           <Route path="/" element={<Home/>}  />
           <Route path="/selectVendedor/:nomeLoja" element={<SelectVendedor/>}  />
           <Route path="/dashboard" element={<Dashboard/>}  />
           </Routes>
       </BrowserRouter>
   )
}

