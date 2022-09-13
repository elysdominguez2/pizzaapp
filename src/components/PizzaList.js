//10) voy a importar los SELECTORS para traer la data
//ESTE PIZZALIST DEBERIA HABER SIDO UNA CARPETA y dentro de esta el index.js lo demas igual
import { useSelector } from "react-redux"; //10)agregue esto
import { selectUser } from "../store/user/selectors"; //10)agregue esto
import { selectPizzas } from "../store/pizzas/selectors"; //13)Aca traigo el selector de las pizzas para poder imprimirlas y además contar cuantas hay para imprimir
import AddPizzaForm from "./AddPizzaForm"; //16)importo el componente
//9) y pongo lo siguiente
// Ahora voy a la App.js y agrego el COMPONENTE PizzaList

function PizzaList() {
  const user = useSelector(selectUser); //10)agregue esto
  const pizzas = useSelector(selectPizzas); //13)Creo una constante que traiga las pizzas y me las guarde en una constante que será un objeto que yo despues puedo separar en partes como pizzas.name, pizzas.description, etc
  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        {" "}
        Welcome back, <strong>{user.name}</strong>!
      </p>
      {/* 10)Agregue la linea de arriba */}
      <AddPizzaForm />
      {/* 16)aca arriba llamo al componente para que se imprima, esto va a seguir en el paso 17) en Slice.js de PIZZAS en el reducer */}
      <h3>{pizzas.name}</h3>
      <p>There are:</p>
      <p>{pizzas.length} pizzas</p>
      {/* 13) en la linea de arriba agregué el .lenght para que imprima cuantas pizzas tengo */}
      <ul>
        {pizzas.map((pizza) => (
          <li key={pizza.id}>
            <h4>{pizza.name}</h4>
            <p>{pizza.description}</p>
            <p>Bought: {pizza.bought} times!</p>
            <img src={pizza.image} alt="" />
          </li>
        ))}
      </ul>
      {/* 14) Todo lo que esta dentro del UL, es un map que hice para traer todas las pizzas y que se impriman, en el video ella hace un condicional que quizas esta bueno agregar por si no hay pizzas */}
    </div>
  );
}

export default PizzaList;

// 11) Continua en STORE/USER/SELECTORS.js//
