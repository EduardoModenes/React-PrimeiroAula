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

    return (
        <form className="formulario">
            <CampoTexto 
            label="Título do Livro"
            placeholder="Digite o título do livro" />

            <CampoTexto 
            label="Autor"
            placeholder="Digite o nome do autor"/>

            <ListaSuspensa label="Gênero" itens={generos}/>

            <Botao texto="Cadastrar" />
        </form>
    );
}

//* Exportando o componente - permitindo que outros arquivos o acessem
export default Formulario;