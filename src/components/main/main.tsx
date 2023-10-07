import Box from '../box/box';
import LinearProgress from '@mui/material/LinearProgress';
import './main.css';
import { FiArrowUp, FiDollarSign,FiAlignJustify } from "react-icons/fi";
import { styled } from '@mui/material/styles';

const GreenLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: '20px', // Define a altura da barra de progresso
    borderRadius: '10px', // Adiciona bordas arredondadas
    '& .MuiLinearProgress-bar': {
      backgroundColor: theme.palette.success.main, // Define a cor verde aqui
    },
  }));

interface MainProps {
    loginfuncionario: string;
    quantidadevenda: number;
    vl_desconto: number;
    vl_total_nf: number;
    porcentagemMeta?: number;
}

export default function Main({ loginfuncionario, quantidadevenda, vl_desconto, vl_total_nf, porcentagemMeta }: MainProps) {

   
    function formattedTotal(valor: number){
        return ( valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
    }

   
    
    return (
        <div className="container__main">
              
            <h2 className='nomeFunc'>{loginfuncionario}</h2>
            <div className='boxs'>
                <Box valor={`${quantidadevenda}`} title="Quantidade de Vendas" icon={<FiArrowUp />}/>
                <Box valor={`${formattedTotal(vl_desconto)}`} title="Meta Diaria" icon={<FiDollarSign/>}/>
                <Box valor={`${formattedTotal(vl_total_nf)}`} title="Valor total Vendido" icon={<FiAlignJustify/>}/>
            </div>
           
            <div className='progress'>
                <div className='progress_Header'>
            <h2 className='progress_Title'>Seu progresso para bater a meta:</h2>
            <h2 className='progress_Porcentage'>{porcentagemMeta}%</h2>
            </div>
           <GreenLinearProgress 
           variant="determinate" 
           value={porcentagemMeta}
           />
           </div>
        </div>
        
    );
}
