import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cabecera from "./components/Cabecera";
import Pie from "./components/Pie";
import Portada from "./components/Portada/Portada";
import Documentación from "./components/Documentación/Documentación";
import EditaDocumentación from "./components/Documentación/EditaDocumentación/EditaDocumentación";
import Error404 from "./components/Error404";
import Acceso from "./components/Acceso/Acceso";
import { ContextoAcreditado } from './contexto/Acreditación';
import { ContextoTema, TemaDía } from './contexto/Tema';

function App() {

  const [acreditado, ponAcreditación] = useState();

  const conAcreditación = () => ponAcreditación({acreditado: true, ponAcreditación: ponAcreditación});

  return (
    <ContextoTema.Provider value={TemaDía}>
      <ContextoAcreditado.Provider value={{acreditado, ponAcreditación}}>
        <div className="d-flex flex-column min-vh-100">
          <BrowserRouter>
            <Cabecera titulo="Lenguaje" />
            <div className="mt-4">
              <Routes>
                <Route path="/" element={<><br /><br /><br /><br /><Portada /><br /><br /></>}></Route>
                <Route path="/documentacion/*" element={<><br /><br /><br /><br /><Documentación /><br /><br /></>}></Route>
                <Route path="/edita/*" element={<><br /><br /><br /><br /><EditaDocumentación /><br /><br /></>}></Route>
                <Route path="/accede/*" element={<><br /><br /><br /><br /><Acceso acredita={conAcreditación} /><br /><br /></>}></Route>
                <Route path="*" element={<Error404 />}></Route>
              </Routes>
            </div>
            <Pie />
          </BrowserRouter>
        </div>
      </ContextoAcreditado.Provider>
    </ContextoTema.Provider>
  );
}

export default App;
