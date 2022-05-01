import { Routes, Route } from "react-router-dom";
import Error404 from "./Error404";
import MenuLateral from "./MenuLateral"
import Contenido from "./Contenido"

const Aprende = () => {

    return (
        <Routes>
            <Route path="" element={
                <div className="container mw-100 p-3" style={{ width: "90rem", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center", columnGap: "10rem", rowGap: "5rem" }}>
                    <MenuLateral />
                    <Contenido />
                </div>
            } >
                <Route path=":idArticulo" element={
                    <div className="container mw-100 p-3" style={{ width: "90rem", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center", columnGap: "10rem", rowGap: "5rem" }}>
                        <MenuLateral />
                        <Contenido />
                    </div>
                } />
            </Route>
            <Route path="*" element={<Error404 />}></Route>
        </Routes>
    )
}

export default Aprende
