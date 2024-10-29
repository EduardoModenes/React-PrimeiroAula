import Botao from "./components/Botao/Botao";

function App() {
  return (
    <div>
      <form>
        <label>Título do Livro</label>
        <input type="text" placeholder="Digite o título" />

        <label>Autor</label>
        <input type="text" placeholder="Digite o nome do autor" />

        <label>Gênero</label>
        <input type="text" placeholder="Digite o gênero do livro" />
        <Botao />
        <Botao texto="Cadastrar"/>
        <Botao texto="Logar"/>
        <Botao texto="Confirmar"/>
      </form>
      <div>
        <ul>
          <li>Livro 1</li>
          <li>Livro 2</li>
          <li>Livro 3</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
