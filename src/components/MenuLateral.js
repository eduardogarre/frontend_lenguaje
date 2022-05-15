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
            console.log("--- HIJOS ---");
            console.log(hijos);
            let docus = []
            hijos.forEach(idHijo => {
                fetch(servidor + "/api/v1/documento/" + idHijo)
                    .then(respuesta => respuesta.json())
                    .then(hijo => docus.push(hijo));
            });
            setDocumentos(docus);
        }
        asincrona();
    }, [documentos, setDocumentos]);

    useEffect(() => {
        if (cargando) {
            cargaDocumentos();
            setCargando(false);
        }
    }, [cargaDocumentos, cargando, setCargando]);

    console.log("--- DOCUMENTOS ---");
    console.log(documentos);

    return (
        <div className="border rounded rounded-3 py-2 px-4" style={{ minWidth: "15rem", background: "#fafafa" }}>
            <Acordeon documentos={documentos} />
        </div>
    )
}

export default MenuLateral
