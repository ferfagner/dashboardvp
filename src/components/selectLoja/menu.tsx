import Form from '../Form/form'
import imgUser from './../../assets/logo.png'
import './menu.css'

import axios from 'axios'
import { useState, useEffect } from 'react';

const baseURL = "https://easypedidos.sytes.net:8082/evento/getdadosbdemail";



interface infoempresaProps {
    dadosempresa: [dadosEmpresaProps];
    databasecliente: number;
    sucess: boolean

}

interface dadosEmpresaProps {
    identificacaointegracao: String


}

interface nomeLojaProps {
    nome?: String
}
export default function Menu(nomeLoja: nomeLojaProps) {

    const [infoempresa, setInfoempresa] = useState<infoempresaProps>({} as infoempresaProps);

    useEffect(() => {


        api()


    }, []);

    function api() {
        axios.post(`${baseURL}`, {
            "email": "andre@casavieiraporto.com",
            "senha": "123"
        }, {
            auth: {
                "username": "testserver",
                "password": "testserver"
            }
        }
        )
            .then((response) => {
                setInfoempresa(response.data);
            });
    }



    if (!infoempresa.sucess) {
        return <h4>{'Carregando ...'}</h4>;
    } else {

        return (

            <div className="container__menu">
                <img
                    src={imgUser}
                    className='imgUser'
                />
                <h3 className='nomeUser'>Casa Vieira Porto</h3>
                {
                    nomeLoja.nome ? <h2>{nomeLoja.nome}</h2> : <Form
                        dadosempresa={infoempresa.dadosempresa}
                        rota="selectVendedor"
                    />
                }

                <audio controls autoPlay src="https://server06.srvsh.com.br:7304/stream/">
                    Seu navegador não suporta a reprodução de áudio.
                </audio>


            </div>

        )

    }
}