import Main from "../../components/main/main";
import './deshboard.css';
import { useLocation } from 'react-router-dom';

interface vendedorProps {
  loginfuncionario: string;
  quantidadevenda: number;
  vl_desconto: number;
  vl_total_nf: number;
}


export default function Dashboard() {

  const { state } = useLocation();
  const dadosVendedor = state?.filtrado?.[0];

  function calcularMeta(data : vendedorProps ) {
    
    const hoje = new Date();
    const ultimoDiaMes = new Date(hoje.getFullYear(), hoje.getMonth() + 1, 0);
    const diasNoMes = ultimoDiaMes.getDate();

    const metasPorFuncionario: Record<string, number> = {
      JORDHANNA: 45000,
      KETILY: 55000,
      DINORAR: 55000,
      NATHALLY: 25000,
      CAMILA: 40000,
      JESSICA: 25000,
      DELIENE: 25000,
      LUANA: 40000,
      DAICY: 25000
    };

    let diasTrabalhados = 0;

    // Contar os dias trabalhados (excluindo os domingos)
    for (let i = hoje.getDate(); i <= diasNoMes; i++) {
      const dataAtual = new Date(hoje.getFullYear(), hoje.getMonth(), i);
      if (dataAtual.getDay() !== 0) {
        diasTrabalhados++;
      }
    }

  
    const meta = metasPorFuncionario[data.loginfuncionario] || 0;
  
    const metaRestante = meta - data.vl_total_nf;
  
    const metaPorDia = metaRestante / diasTrabalhados;
  
    
  
    return metaPorDia;
  }

  if (dadosVendedor?.length === 0) {
    return <div className="loading">Carregando...</div>;
  }

  return (
    <div className="container__app">
      <div className="menu">
       
          <Main
            loginfuncionario={dadosVendedor.loginfuncionario}
            quantidadevenda={dadosVendedor.quantidadevenda}
            vl_desconto={calcularMeta(dadosVendedor)}
            vl_total_nf={dadosVendedor.vl_total_nf}
          />
      </div>
    </div>
  );
}
