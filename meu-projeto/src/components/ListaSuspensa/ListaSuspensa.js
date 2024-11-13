import './ListaSuspensa.css'

// * Componente como função em Arrow Function

// * Foi utilizado o .map na lista de generos passados pelo Formulario.js
// ^ O .map é uma função de OBJETO/VETOR/LISTA/ARRAY em que recebe uma função dentro, essa função vai transformar cada item da lista em outra coisa.
// TODO A transformação ou o resultado dela fica no retorno da função passada para o MAP (No nosso caso é uma arrow function)
// * Cada item, se torna uma tag <option>
// ^ Ao usar map para criar tage no react, é necessário colocar um atributo chamado key, para que ele diferencie cada tag.

const ListaSuspensa = (props) => {
    // * Return = o que ele vai representar via HTML
    return (
        <div className="lista-suspensa"> 
            <label>{props.label}</label>
            <select required={props.obrigatorio}>
                <option>Seleciona uma opção... </option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                } )}
            </select>
        </div>
    );
}


// * Exportando para outros arquivos poderem usar esse componente
export default ListaSuspensa;