import "./App.css";
import HelloWorld from "./components/HelloWorld";

function App() {
  const name = "Luccas";

  function sum(a, b) {
    return a + b;
  }

  const url = "https://via.placeholder.com/150";

  return (
    <div className="App">
      <p>Testando o JSX</p>
      <p>Olá {name}</p>
      <p>A soma é: {sum(1, 2)}</p>
      <img src={url} alt="Minha Imagem" />
      <HelloWorld />
    </div>
  );
}

export default App;
