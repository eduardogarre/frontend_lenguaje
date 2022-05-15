import { Routes, Route } from "react-router-dom";
import Error404 from "./Error404";
import React, { useRef, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Editor } from '@tinymce/tinymce-react';
import Boton from './Boton';
import { nodeScriptReplace, ejecutaHLJS } from "../herramientas"
import { servidor } from '../Configuración'

let raiz;

const Documentos = () => {
    const editorRef = useRef(null);

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
            })
    }, [id]);

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

        raiz = document.getElementById("raiz")

        raiz.innerHTML = ""
        raiz.innerHTML = código

        nodeScriptReplace(raiz);

        e.preventDefault();

        return false;
    }

    return (
        <Routes>
            <Route path="" element={
                <>
                    {(estáCargando) && (
                        <>
                            <center className="p-3">
                                <h1>
                                    <i className="bi bi-clock-history"></i>
                                </h1>
                            </center>
                        </>
                    )}
                    {(!estáCargando) && (
                        <>
                            <form id="formularioArticulo">
                                <div className="mb-3">
                                    <label for="título" className="form-label">Título</label>
                                    <input type="text" className="form-control" id="título" aria-describedby="ayudaTítulo" />
                                    <div id="ayudaTítulo" className="form-text">Inserta aquí el título de este documento.</div>
                                </div>
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    initialValue="<p>This is the initial content of the editor.</p>"
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
                            <div id="raiz"></div>
                        </>
                    )}
                </>
            } >
                <Route path=":idArticulo" element={
                    <>
                        {(estáCargando) && (
                            <>
                                <center className="p-3">
                                    <h1>
                                        <i className="bi bi-clock-history"></i>
                                    </h1>
                                </center>
                            </>
                        )}
                        {(!estáCargando) && (
                            <>
                                <form id="formularioArticulo">
                                    <div className="mb-3">
                                        <label for="título" className="form-label">Título</label>
                                        <input type="text" className="form-control" id="título" aria-describedby="ayudaTítulo" />
                                        <div id="ayudaTítulo" className="form-text">Inserta aquí el título de este documento.</div>
                                    </div>
                                    <Editor
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        initialValue="<p>This is the initial content of the editor.</p>"
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
                                <div id="raiz"></div>
                            </>
                        )}
                    </>
                } />
            </Route>
            <Route path="*" element={<Error404 />}></Route>
        </Routes>
    )
}

export default Documentos
