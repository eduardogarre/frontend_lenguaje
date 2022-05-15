import { useCallback, useEffect, useState } from "react";
import { servidor } from "../Configuración";
import Acordeon from "./Acordeon"

const MenuLateral = () => {

    const [cargando, setCargando] = useState(true);
    const [documentos, setDocumentos] = useState([]);

    const cargaDocumentos = useCallback(() => {
        async function asincrona() {
            let respuesta = await fetch(servidor + "/api/v1/documento/0");
            let json = await respuesta.json();
            let hijos = json.hijos;
            let docus = []
            hijos.forEach(idHijo => {
                fetch(servidor + "/api/v1/documento/" + idHijo)
                    .then(respuesta => respuesta.json())
                    .then(hijo => docus.push(hijo));
            });
            setDocumentos(docus);
        }
        asincrona();
    }, [setDocumentos]);

    useEffect(() => {
        if (cargando) {
            cargaDocumentos();
            setCargando(false);
        }
    }, [cargaDocumentos, cargando]);

    console.log("--- DOCUMENTOS ---");
    console.log(documentos);

    return (
        <div className="border rounded rounded-3 py-2 px-4" style={{ minWidth: "15rem", background: "#fafafa" }}>
            {(cargando) && (
                <center className="p-3"><h1><i className="bi bi-clock-history"></i></h1></center>
            )}

            {(!cargando) && (
                <Acordeon documentos={documentos} />
            )}
        </div>
    )
}

export default MenuLateral
