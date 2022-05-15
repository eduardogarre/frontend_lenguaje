import { Routes, Route } from "react-router-dom";
import Error404 from "./../Error404";
import MenúLateral from "./MenúLateral/MenúLateral"
import VisorDocumentación from "./Visor/VisorDocumentación"

const Documentación = () => {

    return (
        <Routes>
            <Route path="" element={
                <div className="container presenta-documento" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", columnGap: "3rem", rowGap: "4rem"}}>
                    <MenúLateral />
                    <VisorDocumentación />
                </div>
            } >
                <Route path=":idArticulo" element={
                    <div className="container presenta-documento" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", columnGap: "3rem", rowGap: "4rem"}}>
                        <MenúLateral />
                        <VisorDocumentación />
                    </div>
                } />
            </Route>
            <Route path="*" element={<Error404 />}></Route>
        </Routes>
    )
}

export default Documentación
