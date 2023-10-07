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

export default function Form({ dadosempresa, rota, dadosVendedor }: infoempresaProps) {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("");

  const filtrado = dadosVendedor && dadosVendedor.filter((obj) => obj.loginfuncionario === selectedValue);

  function getValue() {
    if (!dadosVendedor) {
      navigate(`/${rota}/${selectedValue}`);
    } else {
      navigate(`/${rota}`, { state: { filtrado } });
    }
  }

  return (
    <form className='Form' onSubmit={getValue}>
      {dadosempresa && (
        <select
          id='loja'
          name='loja'
          value={selectedValue? selectedValue: 'Selecione uma opção'}
          onChange={(e) => setSelectedValue(e.target.value)}
        >
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
          {dadosVendedor.map((item) => (
            <option key={item.loginfuncionario} value={item.loginfuncionario}>
              {item.loginfuncionario}
            </option>
          ))}
        </select>
      )}

      <button type='submit'>Enviar</button>
    </form>
  );
}
