//10) voy a importar los SELECTORS para traer la data
//ESTE PIZZALIST DEBERIA HABER SIDO UNA CARPETA y dentro de esta el index.js lo demas igual
import { useSelector } from "react-redux"; //10)agregue esto
import { selectUser } from "../store/user/selectors"; //10)agregue esto
import { selectPizzas } from "../store/pizzas/selectors"; //13)Aca traigo el selector de las pizzas para poder imprimirlas y además contar cuantas hay para imprimir
import AddPizzaForm from "./AddPizzaForm"; //16)importo el componente
// import { BsHeartFill, BsHeart } from "react-icons/bs"; //21) ESTO AL FINA NO LO USE - Pero lee el comentario este  igual ->Instale react-icons y traje los corazones, abajo adentro de un boton lo puse a los iconos y hice una funcion que incluya el id de la pizza que me gusta, si me gusta corazon lleno, si no vacio <-- continua en 22) User - slice.js
import { useDispatch } from "react-redux"; //23)Aca traigo el useDispatch y abajo traigo el state del toggleFavorites
import { toggleFavorites } from "../store/user/slice"; //23)esto tambien me traje y hago una constante más abajo con el dispatch
//9) y pongo lo siguiente
// Ahora voy a la App.js y agrego el COMPONENTE PizzaList

function PizzaList() {
  const dispatch = useDispatch(); //23) Aqui la constante <-- continua más abajo en el boton con el paso 24)
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
            <button
              onClick={() => {
                dispatch(toggleFavorites(pizza.id));
              }}
            >
              {/* 24)Adentro de la apertura del boton tengo que poner un onClick que tenga una funcion que llame al dispatch, NO puedo poner solo dispatch ( siempre en arrow function porque si no tiene infinite loop) y adentro de esa funcion lo que yo ya cree en slice.js User y dentro de esa le pasamos lo que tiene que chequear, en este caso pizza.id para ver si es true or false <--sigue paso 25) en slice.js User */}
              {user.favorites.includes(pizza.id) ? "♥" : "♡"}
            </button>

            <p>{pizza.description}</p>
            <p>Bought: {pizza.bought} times!</p>
            <img style={{ width: 200 }} src={pizza.image} alt="" />
          </li>
        ))}
      </ul>
      {/* 14) Todo lo que esta dentro del UL, es un map que hice para traer todas las pizzas y que se impriman, en el video ella hace un condicional que quizas esta bueno agregar por si no hay pizzas */}
    </div>
  );
}

export default PizzaList;

// 11) Continua en STORE/USER/SELECTORS.js//
