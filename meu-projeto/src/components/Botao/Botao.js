import './Botao.css';
//* Componente baseado em Função = Mais atualizado
//* Usar JS dentro do RETURN
function Botao(props){
    return(
        <input type="submit" className="botao" value={props.texto}  />
    );
}


export default Botao;