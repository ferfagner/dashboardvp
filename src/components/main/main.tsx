import Box from '../box/box'
import './main.css'

interface dataProps {

    loginfuncionario: string;
    quantidadevenda: number;
    vl_desconto: number;
    vl_total_nf: number
  
 };


export default function Main(data : dataProps){

    console.log(data.quantidadevenda)

    return(
        <div className="container__main">
            <h2>{data.loginfuncionario}</h2>
            <div className='boxs'>
                <Box 
                valor={data.quantidadevenda.toString()}
                title="Quantidade de Vendas"
                />
                <Box 
                valor={data.vl_desconto.toString()}
                title="Valor Desconto"
                />
                <Box 
                valor={data.vl_total_nf.toString()}
                title="Valor total Vendido"
                />

            </div>
        </div>
    )

}