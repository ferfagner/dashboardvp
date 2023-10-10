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

  const premioPorMeta: Record<string, number> = {
    bronze: 0,
    prata: 0.10,
    ouro: 0.21,
   
  };

  

 

  function calcularMeta(data : vendedorProps ) {
    
    const hoje = new Date();
    const ultimoDiaMes = new Date(hoje.getFullYear(), hoje.getMonth() + 1, 0);
    const diasNoMes = ultimoDiaMes.getDate();

    

    let diasTrabalhados = 0;

    
    for (let i = hoje.getDate(); i <= diasNoMes; i++) {
      const dataAtual = new Date(hoje.getFullYear(), hoje.getMonth(), i);
      if (dataAtual.getDay() !== 0) {
        diasTrabalhados++;
      }
    }

  
    const meta = metasPorFuncionario[data.loginfuncionario] || 0;
  
    const metaRestante = meta - (data.vl_total_nf - data.vl_desconto);
  
    const metaPorDia = metaRestante / diasTrabalhados;
  
    const porcentagemMetaAlcancada = (((data.vl_total_nf - data.vl_desconto)  / meta) * 100).toFixed(2);
  
    return {metaPorDia, porcentagemMetaAlcancada};
  }

  function calcularFaltaParaMeta(data: vendedorProps, premio : string) {

   

    const meta = metasPorFuncionario[data.loginfuncionario] + (metasPorFuncionario[data.loginfuncionario] * premioPorMeta[premio]) || 0;
    const faltaParaMeta = meta - (data.vl_total_nf - data.vl_desconto);

    
    return faltaParaMeta.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });;

  }

  function calculaPremioParaMeta(data : vendedorProps, premio : string){

    const premioPorMeta: Record<string, number> = {
      bronze: 0.004,
      prata: 0.005,
      ouro: 0.01,
     
    };

    const meta = metasPorFuncionario[data.loginfuncionario] || 0;
    const total = meta * premioPorMeta[premio]

    return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  }

  function retornaMetaEmReal(data : vendedorProps, premio: string){



    const meta = metasPorFuncionario[data.loginfuncionario] + (metasPorFuncionario[data.loginfuncionario] * premioPorMeta[premio]) || 0;

    return meta.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  }



  

  if (dadosVendedor?.length === 0) {
    return <div className="loading">Carregando...</div>;
  }

  

  return (
    <div className="container__dashboardgit">
      <div className="main">
       
          <Main
            loginfuncionario={dadosVendedor.loginfuncionario}
            quantidadevenda={dadosVendedor.quantidadevenda}
            vl_desconto={calcularMeta(dadosVendedor).metaPorDia}
            vl_total_nf={dadosVendedor.vl_total_nf - dadosVendedor.vl_desconto}
            porcentagemMeta={Number(calcularMeta(dadosVendedor).porcentagemMetaAlcancada)}
          />
          
         </div>
         <div className="podio">

         <div className="podio-item topo">
          <span>Classificação</span>
          <span>Valor da Meta</span>
          <span>Falta Vender</span>
          <span>Premiação</span>
        </div>
       
        <div className="podio-item terceiro">
          <span>Bronze</span>
          <span>{retornaMetaEmReal(dadosVendedor, "bronze")}</span>
          <span>{calcularFaltaParaMeta(dadosVendedor, "bronze")}</span>
          <span>{calculaPremioParaMeta(dadosVendedor, "bronze")}</span>
        </div>
        
        <div className="podio-item segundo">
        <span>Prata</span>
        <span>{retornaMetaEmReal(dadosVendedor, "prata")}</span>
          <span>{calcularFaltaParaMeta(dadosVendedor, "prata")}</span>
          <span>{calculaPremioParaMeta(dadosVendedor, "prata")}</span>
        </div>
       
        <div className="podio-item primeiro">
        <span>Ouro</span>
        <span>{retornaMetaEmReal(dadosVendedor, "ouro")}</span>
          <span>{calcularFaltaParaMeta(dadosVendedor, "ouro")}</span>
          <span>{calculaPremioParaMeta(dadosVendedor, "ouro")}</span>
      </div>
       
        
      </div>
    </div>
  );
}
