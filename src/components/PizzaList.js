//10) voy a importar los SELECTORS para traer la data
//ESTE PIZZALIST DEBERIA HABER SIDO UNA CARPETA y dentro de esta el index.js lo demas igual
import { useSelector } from "react-redux"; //10)agregue esto
import { selectUser } from "../store/user/selectors"; //10)agregue esto

//9) y pongo lo siguiente
// Ahora voy a la App.js y agrego el COMPONENTE PizzaList

function PizzaList() {
  const user = useSelector(selectUser); //10)agregue esto
  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        {" "}
        Welcome back, <strong>{user.name}</strong>!
      </p>
      {/* 10)Agregue la linea de arriba */}
      <p>TODO: the list of pizzas</p>
    </div>
  );
}

export default PizzaList;

// 11) Continua en STORE/USER/SELECTORS.js
