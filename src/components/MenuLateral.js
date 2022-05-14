import { useEffect, useState } from "react";
import Acordeon from "./Acordeon"
import { servidor } from "../Configuración";

const jerarquía = [
    {
        id: 0,
        título: "Inicio",
        hijos: [

            {
                id: 1,
                título: "Introducción",
                hijos: []
            },
            {
                id: 2,
                título: "Instalación",
                hijos: [
                    {
                        id: 3,
                        título: "Windows",
                        hijos: []
                    },
                    {
                        id: 4,
                        título: "Linux",
                        hijos: []
                    },
                    {
                        id: 5,
                        título: "macOS",
                        hijos: []
                    }
                ]
            }

        ]
    },
    {
        id: 6,
        título: "Hola, mundo",
        hijos: []
    }
]

async function obténDocumento(id) {
    return fetch(servidor + '/api/v1/documento/' + id)
        .then(respuesta => respuesta.json())
        .then(documento => {
            console.log(documento);
            return documento;
        })
}

const MenuLateral = () => {

    const [estáCargando, setEstaCargando] = useState(true);
    const [documentos, setDocumentos] = useState([]);

    useEffect(() => {
        if (estáCargando) {
            fetch(servidor + '/api/v1/documento/0')
                .then(respuesta => respuesta.json())
                .then(async (documento) => {
                    console.log("documento raíz")
                    console.log(documento)
                    documento.hijos.forEach(async (id) => {
                        console.log("id de hijo: " + id)
                        let hijo = await obténDocumento(id);
                        setDocumentos(documentos.push(hijo));
                    });
                    return await documentos;
                })
                .then(async () => {
                    console.log("Lista de todos los documentos incluidos")
                    console.log(documentos)
                });
            setEstaCargando(false);
        }
    }, [estáCargando, documentos]);

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
            <div className="border rounded rounded-3 py-2 px-4" style={{ minWidth: "15rem", background: "#fafafa" }}>
                <Acordeon inicial={true} jerarquía={jerarquía} />
            </div>
        )
    }
}

export default MenuLateral
