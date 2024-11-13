//* Linkando - Conectando o CSS
import Botao from "../Botao/Botao";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import './Formulario.css';

//* Componente via function

function Formulario() {
    const generos = [
        "Romance",
        "Teologia",
        "Mistério",
        "Fantasia",
        "Terror",
        "Técnico",
        "Quadrinho",
        "Filosofia",
        "Auto Ajuda",
        "Cientificos"
    ];

    const aoSalvar = (evento) => {
        // * Evitando a atualização da página no Submit
        // * Ao passar o evento, podemos controlar quem ativou ele que é o <form>
        // ^ Previne padrão - comportamento padrão de atualizar
        evento.preventDefault(); 
        console.log("Foi enviado");
    }

    return (
        <form onSubmit={aoSalvar} className="formulario">
            <CampoTexto 
            label="Título do Livro *"
            placeholder="Digite o título do livro" 
            obrigatorio ={true} />

            <CampoTexto 
            label="Autor *"
            placeholder="Digite o nome do autor"
            obrigatorio ={true} />

            <ListaSuspensa label="Gênero" itens={generos} obrigatorio ={true}/>

            <Botao>Cadastrar</Botao>
        </form>
    );
}

//* Exportando o componente - permitindo que outros arquivos o acessem
export default Formulario;