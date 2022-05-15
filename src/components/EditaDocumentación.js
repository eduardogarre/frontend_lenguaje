import { Routes, Route } from "react-router-dom";
import Error404 from "./Error404";
import React, {} from 'react';
import EditorDocumento from "./EditorDocumento";


const EditaDocumentación = () => {

    return (
        <Routes>
            <Route path="/:identificador/crea" element={
                <>
                    <EditorDocumento acción="crea" />
                </>
            } />
            <Route path="/:identificador/edita" element={
                <>
                    <EditorDocumento acción="edita" />
                </>
            } />
            <Route path="*" element={<Error404 />}></Route>
        </Routes>
    )
}

export default EditaDocumentación
