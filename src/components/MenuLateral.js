import { useCallback, useEffect, useState } from "react";
import { servidor } from "../Configuración";
import Acordeon from "./Acordeon"

const MenuLateral = () => {

    const [cargando, setCargando] = useState(true);
    const [documentos, setDocumentos] = useState([]);

    const cargaDocumentos = useCallback(async () => {
        async function asincrona() {
            let respuesta = await fetch(servidor + "/api/v1/documento/0");
            let json = await respuesta.json();
            let hijos = json.hijos;
            let docus = [];
            hijos.forEach((idHijo) => {
                fetch(servidor + "/api/v1/documento/" + idHijo)
                    .then(respuesta => respuesta.json())
                    .then(hijo => {
                        docus = [...docus, hijo]
                        setDocumentos(docus)
                    })
            });
        }
        await asincrona();
    }, [setDocumentos]);

    useEffect(() => {
        if (cargando) {
            cargaDocumentos();
            setCargando(false);
        }
    }, [cargaDocumentos, cargando]);

    if (cargando) {
        console.log("1 - CARGANDO");
    }
    else {
        console.log("1B - CARGADO");
    }
    if (documentos.length == 0) {
        console.log("2 - documentos.length == 0");
    }
    if (documentos.length != 0) {
        console.log("2B - documentos.length != 0");
    }

    return (
        <div className="border rounded rounded-3 py-2 px-4" style={{ minWidth: "15rem", background: "#fafafa" }}>
            {(cargando || documentos.length == 0) && (
                <center className="p-3"><h1><i className="bi bi-clock-history"></i></h1></center>
            )}

            {(!cargando && documentos.length > 0) && (
                <Acordeon documentos={documentos} />
            )}
        </div>
    )
}

export default MenuLateral
