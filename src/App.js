import Cabecera from "./components/Cabecera";
import Pie from "./components/Pie";
import Portada from "./components/Portada";
import Aprende from "./components/Aprende";
import Documentos from "./components/Documentos";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Cabecera titulo="Lenguaje" />
      <Routes>
        <Route path="/" element={<><br /><br /><br /><br /><Portada /><br /><br /></>}></Route>
        <Route path="/aprende" element={<><br /><br /><br /><br /><Aprende /><br /><br /></>}></Route>
        <Route path="/documentacion" element={<><br /><br /><br /><br /><Documentos /><br /><br /></>}></Route>
      </Routes>
      <Pie />
    </BrowserRouter>
  );
}

export default App;
