
import { Route, BrowserRouter, Routes} from "react-router-dom";

import Home from "./pages/home/home";
import SelectVendedor from "./pages/selectVendedor/selectVendedor";
import Dashboard from "./pages/deshboard/dashboard";
import Admin from "./pages/admin/admin";


export default function Rotas() {

   return(
       <BrowserRouter>
           <Routes>
           <Route path="/funcionarios" element={<Home/>}  />
           <Route path="/selectVendedor/:nomeLoja" element={<SelectVendedor/>}  />
           <Route path="/dashboard" element={<Dashboard/>}  />
           <Route path="/admin" element={<Admin/>}  />
           </Routes>
       </BrowserRouter>
   )
}

