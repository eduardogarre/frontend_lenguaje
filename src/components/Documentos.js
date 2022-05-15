import { Routes, Route } from "react-router-dom";
import Error404 from "./Error404";
import React, {} from 'react';
import EditaArtículo from "./EditaArtículo";


const Documentos = () => {

    return (
        <Routes>
            <Route path="/:identificador/crea" element={
                <>
                    <EditaArtículo acción="crea" />
                </>
            } />
            <Route path="/:identificador/edita" element={
                <>
                    <EditaArtículo acción="edita" />
                </>
            } />
            <Route path="*" element={<Error404 />}></Route>
        </Routes>
    )
}

export default Documentos
