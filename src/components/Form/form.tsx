import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './form.css'; // Arquivo CSS que será criado

interface infoempresaProps {
  dadosempresa?: [dadosEmpresaProps];
  rota: String;
  dadosVendedor?: vendedorProps[];
}

interface vendedorProps {
    loginfuncionario: string;
    quantidadevenda: number;
    vl_desconto: number;
    vl_total_nf: number;
  }

interface dadosEmpresaProps {
  identificacaointegracao: String;
}

interface PasswordFunc {
  [key: string]: number;
}



export default function Form({ dadosempresa, rota, dadosVendedor }: infoempresaProps) {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("");
  const [password, setPassword] = useState('');

  const filtrado = dadosVendedor && dadosVendedor.filter((obj) => obj.loginfuncionario === selectedValue);

  function getValue() {

    let passwordFunc : PasswordFunc = {

      JORDHANNA: 9190,
      KETILY: 2530,
      DINORAR: 2880,
      NATHALLY: 1920,
      CAMILA: 7030,
      JESSICA: 1864,
      DELIENE: 2860,
      LUANA: 1950,
      DAICY: 8580

    }


    if (!dadosVendedor) {
      navigate(`/${rota}/${selectedValue}`)
    } else {
      if(Number(password) === passwordFunc[selectedValue]){
        navigate(`/${rota}`, { state: { filtrado } });
      }else{
        alert('Senha Incorreta')
      }
      
    }
  }

  return (
    <form className='Form' onSubmit={getValue}>
      {dadosempresa && (
        <select
          id='loja'
          name='loja'
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
        >
          <option value="">
              SELECIONE UMA OPÇÃO
            </option>
          {dadosempresa.map((item) => (
            <option key={item.identificacaointegracao.length} value={item.identificacaointegracao.toString()}>
              {item.identificacaointegracao.toString()}
            </option>
          ))}
        </select>
      )}

      {dadosVendedor && (
        <select
          id='func'
          name='funcname'
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
        >
          <option value="">
          SELECIONE UMA OPÇÃO
            </option>
          {dadosVendedor.map((item) => (
            <option key={item.loginfuncionario} value={item.loginfuncionario}>
              {item.loginfuncionario}
            </option>
          ))}

        </select>
        
      )}
      {dadosVendedor && (
        <input
          type="password"
          placeholder='Digite sua Senha!'
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        )}
      <button type='submit'>Enviar</button>
    </form>
  );
}
