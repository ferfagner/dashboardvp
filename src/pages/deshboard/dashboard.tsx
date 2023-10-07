import Main from "../../components/main/main";
import './deshboard.css';
import { useLocation } from 'react-router-dom';

interface DadosVendedorProps {
  loginfuncionario: string;
  quantidadevenda: number;
  vl_desconto: number;
  vl_total_nf: number;
}

export default function Dashboard() {
  const { state } = useLocation();
  const dadosVendedor = state?.filtrado?.[0];

  return (
    <div className="container__app">
      <div className="menu">
        {dadosVendedor ? (
          <Main
            loginfuncionario={dadosVendedor.loginfuncionario}
            quantidadevenda={dadosVendedor.quantidadevenda}
            vl_desconto={dadosVendedor.vl_desconto}
            vl_total_nf={dadosVendedor.vl_total_nf}
          />
        ) : (
          <h3>Carregando</h3>
        )}
      </div>
    </div>
  );
}
