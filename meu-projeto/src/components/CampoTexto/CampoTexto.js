import './CampoTexto.css';
// * Uma das formas mais usadas de componente via FUNÇÃO
// ~Add import esse "useState"
import { useState } from 'react';
// ^ Com Arrow Function - Muito utilizada também, funciona IGUALMENTE como outros componentes de função

const CampoTexto = (props) => {
// ~Ana: Add variável essa - let valor = "Neuromancer"
// ~ mas react não consegue usar variável para mostrar na tela e atualizar a variável, porque variável nome mesma "valor" 
// let valor = "Neuromancer";

// *Ana: Desestruturação
// ~useState - Quando um Estado
// ~Ao criar um estado =(Uma variável super dinâmica)
// ~Ela nos dá duas coisas: valor e setValor
// ~valor é a variável para usar
// ~setValor é função que grava informação nova dentro da variável "valor"
// ! Usar variável tipo "Estado" ela consegue receber e atualizar automatico sozinho valor na tela
// ^ESSE VARIÁVEL É TIPO "ESTADO" USA PARA MOSTRAR INFORMAÇÃO NA TELA
    const[valor, setValor] = useState('')

    const aoDigitar = (evento) => {
        // * evento.target = A TAG em si 
        // * value = o texto digitado
        // ~ Ana: Tirar const aqui 
        // ~ usar variável "Valor" não funciona, precisa usar "setValor" para receber informação
        // ^Tirar linha 28 e substituir por linha 29
        // valor = evento.target.value;
        setValor(evento.target.value);
        // ~Tirar console.log
        // console.log(valor);
    }
    return(
        <div className='campo-texto'>
            <label>{props.label}</label>
            {/* Ana: add - value={valor}, essa é variavel criar lá cima, linha 8 para cincronizar - react precisa fazer isso*/}
            <input type="text" value={valor} onChange={aoDigitar} placeholder={props.placeholder} required={props.obrigatorio}/>
        </div>
    );
}

export default CampoTexto;