import "./App.css";
import PizzaList from "./components/PizzaList"; //9)importar el componente

function App() {
  return (
    <div className="App">
      {/* 2)Aca borre todo lo inecesario de la App, solo deje los div */}
      {/* 3) Instalo redux-toolkit asi --->  npm install @reduxjs/toolkit react-redux */}
      {/* 4) Creo una carpeta dentro del src que se llame STORE(minuscula) y dentro un index.js */}
      {/* 5) Ir adentro del index del STORE continua ahi el 5 */}

      {/* 9) que continua del componente PizzaList.js, ver ahi, aca agrego el componente y chequeo que se importe arriba tambien - el 10) continua nuevamente en PizzaList.js */}
      <PizzaList />
    </div>
  );
}

export default App;
