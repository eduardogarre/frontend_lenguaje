import Cabecera from "./components/Cabecera";
import Pie from "./components/Pie";
import Portada from "./components/Portada";
import Aprende from "./components/Aprende";
import Documentos from "./components/Documentos";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error404 from "./components/Error404";
import Accede from "./components/Accede";

function App() {

  return (
    <div className="d-flex flex-column min-vh-100">
    <BrowserRouter>
      <Cabecera titulo="Lenguaje" />
        <div className="mt-4">
      <Routes>
        <Route path="/" element={<><br /><br /><br /><br /><Portada /><br /><br /></>}></Route>
        <Route path="/aprende/*" element={<><br /><br /><br /><br /><Aprende /><br /><br /></>}></Route>
        <Route path="/documentacion/*" element={<><br /><br /><br /><br /><Documentos /><br /><br /></>}></Route>
        <Route path="/accede/*" element={<><br /><br /><br /><br /><Accede /><br /><br /></>}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
        </div>
      <Pie />
    </BrowserRouter>
    </div>
  );
}

export default App;
