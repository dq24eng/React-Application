import './App.css';
import React, {Component, Fragment} from "react";
//Components
import NavBar from "./components/NavBar";
import Card from "./components/Card";

class App extends Component {
  render () { 
    return ( 
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

export default App; 
