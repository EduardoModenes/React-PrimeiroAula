import './CampoTexto.css';
// * Uma das formas mais usadas de componente via FUNÇÃO

// ^ Com Arrow Function - Muito utilizada também, funciona IGUALMENTE como outros componentes de função

const CampoTexto = (props) => {
    return(
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input type="text" placeholder={props.placeholder}/>
        </div>
    );
}

export default CampoTexto;