import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './form.css'


interface infoempresaProps {
    dadosempresa: [dadosEmpresaProps];
   
}

interface dadosEmpresaProps {
    identificacaointegracao: String
}





export default function Form(infoempresa: infoempresaProps) {
    const navigate = useNavigate()

    const [velue, setVelue] = useState("")

   

   function getValue(){
   
    navigate(`/info/${velue}`)



   }



        return (


            <form className='Form' onSubmit={getValue}>
                <select 
                id="func" 
                name="loja"
                onChange={(e)=> setVelue(e.target.value)}
                >
                    {infoempresa.dadosempresa.map(item => 
                        <option key={Math.random()} value={item.identificacaointegracao.toString()}>{item.identificacaointegracao.toString()}</option>
                        )}

                
                </select>

                <button type='submit'>Enviar</button>

            </form>
        )
    }

