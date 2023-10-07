import Box from '../box/box';
import './main.css';
import { FiArrowUp, FiDollarSign,FiAlignJustify } from "react-icons/fi";

interface MainProps {
    loginfuncionario: string;
    quantidadevenda: number;
    vl_desconto: number;
    vl_total_nf: number;
}

export default function Main({ loginfuncionario, quantidadevenda, vl_desconto, vl_total_nf }: MainProps) {

   
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
        </div>
    );
}
