//A diferencia de los elementos del DOM de los navegadores, los elementos de React son objetos planos, y su creación es de bajo costo. React DOM se encarga de actualizar el DOM para igualar los elementos de React.

import './App.css';
import React, {Component, Fragment} from "react";
//Components
import NavBar from "./components/NavBar";
import Card from "./components/Card";

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;*/

/*export default function App() {
  return (
    <div className="App">
      <Nav />
      <Nav />
      <Nav />
    </div>
  );
}*/

// Extends sirve para extender funcionalidad por intermedio de la herencia 

class App extends Component {
  //Conceptualmente, los componentes son como las funciones de JavaScript. Aceptan entradas arbitrarias (llamadas “props”) y retornan elementos de React que describen lo que debe aparecer en la pantalla.
  render () { //Permite retornar a JSX
    return ( // Si se desea devolver más de un elemento JSX se tienen que envolver en un <div>
      /*<div> 
        <h1>Hello World!</h1>
        <h2>Hello World!</h2>
      </div>*/
      /*<Fragment className="App">
        <NavBar />
      </Fragment>*/

      /*Otra forma sería:
      <>
        <h1>Hello World!</h1>
        <h2>Hello World!</h2>
      </>
      */ 
      <>
        <NavBar />
        <div className= "CardClass">
          <Card 
            name="Coloración"
            description="El servicio de color es un universo infinito dentro de nuestro salón. Te asesoramos de una manera minuciosa para poder aconsejarte sobre qué es lo que tu cabello necesita. Brindamos un servicio de coloración Premium que tiene una exigencia de aplicación, lavado y cuidado más rigurosa. Este hará notar un antes y después en tu experiencia y resultado de tu coloración. ¡Animate!"/>
        </div>
      </>
    )
  }
}

export default App; //Export default sirve para cuando se desea exportar un componente. SOLAMENTE SE PUEDE HACER UN EXPORT DEFAULT POR FICHERO

/* También se pueden exportar variables 
export let age = 25
export const name = "Daniel"
---> Para importar:
import {name} from "./App"
---> O:
import {name, age, my-variable, function} from "./App"
*/
