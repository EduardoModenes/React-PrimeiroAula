import React, { Component } from 'react';
//* Componente baseado em classe (Mais antigo)
// * export = exporta para arquivos externos
//* permite que arquivos externos acessem esse component (Por exemplo o App.js usar este Botao)
class Botao extends Component{
    //* render = renderiza - carrega - desenha
    render(){
        return(
            <input type="submit" value="Cadastrar" />
        );
    }
}
//* export default = uma forma de exportar o PRINCIPAL do arquivo. 
// ^ Já que só tem um, vai ser o Botao mesmo.
export default Botao;