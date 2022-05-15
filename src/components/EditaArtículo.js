import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from "react-router-dom";
import { Editor } from '@tinymce/tinymce-react';
import Boton from './Boton';
import { ejecutaHLJS } from "../herramientas"
import { servidor } from '../Configuración'

const EditaArtículo = ({ id, título, contenido, acción, padre }) => {

    const editorRef = useRef(null);
    const [estáCargando, setEstaCargando] = useState(true);
    const [documento, setDocumento] = useState(null);

    const { identificador } = useParams();

    if (acción === "crea" && identificador !== undefined) {
        padre = identificador;
        console.log("Creando un nuevo artículo, con padre: " + padre);
    }
    else if (acción === "edita" && identificador !== undefined) {
        id = identificador;
        console.log("Cambiando un artículo previo, con id: " + id);
    }
    else if (identificador === undefined) {
        console.log("identificador indefinido");
    }

    useEffect(() => {
        if (acción === "edita") {
            fetch(servidor + '/api/v1/documento/' + id)
                .then(respuesta => respuesta.json())
                .then(doc => {
                    setDocumento(doc);
                    setEstaCargando(false);
                })
        }
    }, [acción, id]);

    const guardaDocumento = (e) => {

        let contenidoEditor;

        if (editorRef.current) {
            contenidoEditor = editorRef.current.getContent();
        }

        const código = contenidoEditor + ejecutaHLJS;

        console.log('Contenido Editor');
        console.log(código);

        let título = document.getElementById("título");
        const ruta = servidor + '/api/v1/documento';

        let dato = {
            "id": 0,
            "padre": 0,
            "título": título.value,
            "contenido": contenidoEditor,
            "hijos": []
        }

        const códigoJson = JSON.stringify(dato);

        fetch(ruta, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            mode: 'cors', // no-cors, cors, same-origin
            cache: 'no-cache',
            body: códigoJson,
        })

        e.preventDefault();

        return false;
    }

    return (
        <>
            {(estáCargando) && (
                <center className="p-3">
                    <h1>
                        <i className="bi bi-clock-history"></i>
                    </h1>
                </center>
            )}
            {(!estáCargando) && (
                <form id="formularioArticulo">
                    <div className="mb-3">
                        <label htmlFor="título" className="form-label">Título</label>
                        <input type="text" className="form-control" id="título" aria-describedby="ayudaTítulo" value={(acción === "edita") ? documento.título : título} />
                        <div id="ayudaTítulo" className="form-text">Inserta aquí el título de este documento.</div>
                    </div>
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue={(acción === "edita") ? documento.contenido : contenido}
                        init={{
                            height: 500,
                            menubar: false,
                            language: 'es',
                            plugins: [
                                'quickbars', 'advlist', 'autolink', 'lists', 'code', 'codesample', 'link', 'image', 'charmap',
                                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
                            ],
                            toolbar: 'preview | undo redo | fontfamily fontsize | ' +
                                'bold italic forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'styles | codesample code | hr | removeformat | help',
                            codesample_languages: [
                                { text: 'Ñ', value: 'ñ' },
                                { text: 'JavaScript', value: 'javascript' },
                                { text: 'CSS', value: 'css' },
                                { text: 'html', value: 'html' },
                                { text: 'Shell', value: 'shell' },
                                { text: 'Powershell', value: 'owershell' }
                            ],
                            codesample_global_prismjs: true,
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    />
                    <Boton texto="Guarda" onClick={guardaDocumento} />
                </form>
            )}
        </>
    )
}

EditaArtículo.defaultProps = {
    id: -1,
    título: "Título",
    contenido: "<p>Comienza a escribir...</p>",
    acción: "crea",
    padre: 0
}

EditaArtículo.propTypes = {
    id: PropTypes.number,
    título: PropTypes.string,
    contenido: PropTypes.string,
    acción: PropTypes.string,
    padre: PropTypes.number
}

export default EditaArtículo
