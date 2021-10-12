import { useState } from "react";

import Cabecera from "./components/Cabecera";
import Contenido from "./components/Contenido";
import Pie from "./components/Pie";

function App() {
  const [tareas, ponTareas] = useState([
      {
          id: 1,
          text: "Doctors Appointment",
          day: "Feb 5th at 2:30pm",
          reminder: true
      },
      {
          id: 2,
          text: "Meeting at School",
          day: "Feb 6th at 1:30pm",
          reminder: true
      },
      {
          id: 3,
          text: "Food Shopping",
          day: "Feb 5th at 2:30pm",
          reminder: false
      },
  ])

  return (
    <>
      <Cabecera titulo="Lenguaje" />
      <br />
      <br />
      <br />
      <br />
      <Contenido />
      <br />
      <br />
      <Pie />
    </>
  );
}

export default App;
