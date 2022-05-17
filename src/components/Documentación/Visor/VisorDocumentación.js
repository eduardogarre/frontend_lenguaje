import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VisorDocumento from "./VisorDocumento";
import { servidor } from "../../../Configuración";

const VisorDocumentación = ({ cargando }) => {

    const [estáCargando, setEstaCargando] = useState(cargando);
    const [documento, setDocumento] = useState(null);
    const [documentos, setDocumentos] = useState([]);

    let params = useParams();

    let id = 0

    if (params.idArticulo !== undefined) {
        id = params.idArticulo
    }
    else {
        id = -1
    }

    const cargaDocumentos = useCallback(async (padre) => {
        async function asincrona(padre) {
            let hijos = padre.hijos;
            let docus = [];
            hijos.forEach((idHijo) => {
                fetch(servidor + "/api/v1/documento/" + idHijo)
                    .then(respuesta => respuesta.json())
                    .then(hijo => {
                        docus = [...docus, hijo]

                        console.log("Consigo hijo con id: " + hijo.id);

                        // Establezco los documentos, en el orden en el que aparecen
                        // en el array documento.hijos del padre
                        if (docus.length === hijos.length) {
                            let docs = hijos.map((idc) => {
                                let doc = docus.findIndex((d) => idc === d.id);
                                return docus[doc];
                            });
                            setDocumentos(docs);
                            console.log("Documentos hijos conseguidos");
                            console.log(docs);
                            setEstaCargando(false);
                        }
                    })
            });
        }

        if (estáCargando || (documento && documento.id === id)) {
            await asincrona(padre);
        }
    }, [id, documento, estáCargando, setDocumentos, setEstaCargando]);

    useEffect(() => {

        let pideDocumento = false;
        if (documento && documento.id != id) {
            pideDocumento = true;
        }
        if (estáCargando && id > -1) {
            pideDocumento = true;
        }

        console.log("DEPURACIÓN");
        console.log("documento");
        console.log(documento);
        if (documento) {
            console.log("documento.id");
            console.log(documento.id);
        }
        console.log("id");
        console.log(id);
        console.log("estáCargando");
        console.log(estáCargando);
        console.log("pideDocumento");
        console.log(pideDocumento);

        if (pideDocumento) {
            fetch(servidor + '/api/v1/documento/' + id)
                .then(respuesta => respuesta.json())
                .then(async (dato) => {
                    setDocumento(dato);
                    console.log("Consigo documento con id: " + dato.id);
                    if (dato && dato.hijos.length > 0) {
                        await cargaDocumentos(dato);
                    }
                    else if (dato) {
                        setEstaCargando(false);
                    }
                })
        }
    }, [id, estáCargando, cargaDocumentos]);

    if (estáCargando) { // Si está cargando, mostramos un texto que lo indique
        return (
            <center className="w-100">
                <div>
                    <h1><i className="bi bi-clock-history"></i></h1>
                </div>
            </center>
        );
    }
    else {
        return (
            <div className="d-flex flex-column min-vh-100">
                <VisorDocumento documento={documento} />
                {(documentos.length > 0) ?
                    (
                        documentos.map((elemento) => {
                            return (
                                <VisorDocumento documento={elemento} />
                            )
                        })
                    )
                    :
                    (
                        <></>
                    )
                }
            </div>
        )
    }
}

VisorDocumentación.defaultProps = {
    cargando: true
}

export default VisorDocumentación
