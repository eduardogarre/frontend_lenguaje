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

    async function cargaÁrbolDocumentosAsíncrono(padre) {
        console.log("cargaÁrbolDocumentosAsíncrono");
        let hijos = padre.hijos;
        let docus = [];
        for (let i = 0; i < hijos.length; i++) {
            let respuesta = await fetch(servidor + "/api/v1/documento/" + hijos[i]);
            hijos[i] = await respuesta.json();
            if (hijos[i].hijos.length > 0) {
                hijos[i] = await cargaÁrbolDocumentosAsíncrono(hijos[i]);
            }
            docus = [...docus, hijos[i]];
        }
        padre.hijos = docus;
        return padre;
    }

    const cargaÁrbolDocumentos = useCallback(async (padre) => {
        if (padre) {
            console.log("cargaÁrbolDocumentos");
            return await cargaÁrbolDocumentosAsíncrono(padre);
        }
    });

    const cargaDocumentos = useCallback(async () => {
        async function asincrona() {
            let hijos = documento.hijos;
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
                            
                            console.log("ÁRBOL DE DOCUMENTOS");
                            console.log(cargaÁrbolDocumentos(documento));
                        }
                    })
            });
        }

        await asincrona();
    }, [id, documento, estáCargando, setDocumentos, setEstaCargando]);

    useEffect(() => {

        let pideDocumento = false;
        let pideDocumento1 = false;
        let pideDocumento2 = false;
        let pideDocumento3 = false;

        if (documento && documento.id != id) {
            pideDocumento1 = true;
        }
        if (documento && documento.hijos.length != documentos.length) {
            console.log("Los hijos no concuerdan");
            if (documento.hijos.length <= 0) {
                console.log("Realmente el documento actual no tiene hijos, los borro");
                setDocumentos([]);
                pideDocumento2 = false;
            }
            else {
                console.log("Los hijos del documento actual no han cargado, los pido");
                cargaDocumentos();
            }
        }
        if (estáCargando && id > -1) {
            pideDocumento3 = true;
        }

        pideDocumento = pideDocumento1 || pideDocumento2 || pideDocumento3;

        console.log("DEPURACIÓN");
        console.log("documento");
        console.log(documento);
        if (documento) {
            console.log("documento.id");
            console.log(documento.id);
            console.log("documentos.length");
            console.log(documentos.length);
            console.log("documento.hijos.length");
            console.log(documento.hijos.length);
        }
        console.log("documentos");
        console.log(documentos);
        console.log("id");
        console.log(id);
        console.log("estáCargando");
        console.log(estáCargando);
        console.log("pideDocumento");
        console.log(pideDocumento);
        console.log("pideDocumento1");
        console.log(pideDocumento1);
        console.log("pideDocumento2");
        console.log(pideDocumento2);
        console.log("pideDocumento3");
        console.log(pideDocumento3);

        if (pideDocumento) {
            fetch(servidor + '/api/v1/documento/' + id)
                .then(respuesta => respuesta.json())
                .then(async (dato) => {
                    setDocumento(dato);
                    console.log("Consigo documento con id: " + dato.id);
                    if (dato && dato.hijos.length === 0) {
                        setEstaCargando(false);
                    }
                })
        }
    }, [id, documento, documentos, estáCargando, cargaDocumentos]);

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
