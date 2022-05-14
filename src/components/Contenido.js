import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Artículo from "./Articulo"
import { servidor } from "../Configuración";

const Contenido = () => {

    const [estáCargando, setEstaCargando] = useState(true);
    const [documento, setDocumento] = useState(null);

    let params = useParams();

    let id = 0

    if (params.idArticulo !== undefined) {
        id = params.idArticulo
    }
    else {
        id = 1
    }

    useEffect(() => {
        fetch(servidor + '/api/v1/documento/' + id)
            .then(respuesta => respuesta.json())
            .then(dato => {
                setDocumento(dato);
                setEstaCargando(false);
                console.log(dato);
            })
    }, [id]);

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
            <Artículo título={documento.título} texto={documento.contenido} />
        )
    }
}

export default Contenido
