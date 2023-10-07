import Box from '../box/box';
import './main.css';

interface MainProps {
    loginfuncionario: string;
    quantidadevenda: number;
    vl_desconto: number;
    vl_total_nf: number;
}

export default function Main({ loginfuncionario, quantidadevenda, vl_desconto, vl_total_nf }: MainProps) {

    const formattedTotal = vl_total_nf.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  

    return (
        <div className="container__main">
            <h2 className='nomeFunc'>{loginfuncionario}</h2>
            <div className='boxs'>
                <Box valor={`${quantidadevenda}`} title="Quantidade de Vendas" />
                <Box valor={`${vl_desconto}`} title="Valor Desconto" />
                <Box valor={`${formattedTotal}`} title="Valor total Vendido" />
            </div>
        </div>
    );
}
