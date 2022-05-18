import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VisorDocumento from "./VisorDocumento";
import { servidor } from "../../../Configuración";

const VisorDocumentación = ({ cargando }) => {

    const [estáCargando, setEstáCargando] = useState(cargando);
    const [árbol, setÁrbol] = useState(null);

    let params = useParams();

    let id = 0

    if (params.idArticulo !== undefined) {
        id = params.idArticulo
    }
    else {
        id = -1
    }

    async function cargaDocumento(id) {
        let respuesta = await fetch(servidor + "/api/v1/documento/" + id);
        let doc = await respuesta.json();
        return doc;
    }

    async function cargaÁrbolDocumentosAsíncrono(padre) {
        console.log("cargaÁrbolDocumentosAsíncrono");
        let hijos = padre.hijos;
        let docus = [];
        for (let i = 0; i < hijos.length; i++) {
            hijos[i] = await cargaDocumento(hijos[i])
            if (hijos[i].hijos.length > 0) {
                hijos[i] = await cargaÁrbolDocumentosAsíncrono(hijos[i]);
            }
            docus = [...docus, hijos[i]];
        }
        padre.hijos = docus;
        return padre;
    }

    const cargaÁrbolDocumentos = async (id) => {
        let doc = await cargaDocumento(id)
        console.log("cargaÁrbolDocumentos");
        return await cargaÁrbolDocumentosAsíncrono(doc);
    };

    useEffect(() => {
        const asíncrona = async () => {
            let docRaíz = await cargaÁrbolDocumentos(id);
            setÁrbol(docRaíz);
            setEstáCargando(false);
        }

        let pideDocumento = false;
        let pideDocumento1 = false;
        let pideDocumento2 = false;

        if (árbol && árbol.id != id) {
            pideDocumento1 = true;
        }
        if (estáCargando && id > -1) {
            pideDocumento2 = true;
        }

        pideDocumento = pideDocumento1 || pideDocumento2;

        console.log("DEPURACIÓN");
        console.log("árbol");
        console.log(árbol);
        if (árbol) {
            console.log("árbol.id");
            console.log(árbol.id);
            console.log("árbol.length");
            console.log(árbol.length);
            console.log("árbol.hijos.length");
            console.log(árbol.hijos.length);
        }
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

        if (pideDocumento) {

            if (id >= 0) {
                asíncrona();
            }
        }
    });

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
            <div className="d-flex flex-row min-vh-100">
                <div className="d-flex flex-column min-vh-100">
                    <VisorDocumento documento={árbol} />
                </div>
                <div className="lista-de-apartados">
                    hola
                </div>
            </div>
        )
    }
}

VisorDocumentación.defaultProps = {
    cargando: true
}

export default VisorDocumentación
