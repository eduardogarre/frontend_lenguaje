import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import _uniqueId from 'lodash/uniqueId';
import { servidor } from "../../../Configuración";
import AcordeonBoton from "./AcordeonBoton"
import AcordeonContenido from "./AcordeonContenido"
import { ContextoAcreditado } from "../../../contexto/Acreditación";
import { ContextoTema } from "../../../contexto/Tema";

const Acordeon = ({ idRaíz, profundidad }) => {

    const [cargando, setCargando] = useState(true);
    const [documentos, setDocumentos] = useState([]);

    const {acreditado} = useContext(ContextoAcreditado);

    const cargaDocumentos = useCallback(async () => {
        async function asincrona() {
            let respuesta = await fetch(servidor + "/api/v1/documento/" + idRaíz);
            let json = await respuesta.json();
            let hijos = json.hijos;
            let docus = [];
            hijos.forEach((idHijo) => {
                fetch(servidor + "/api/v1/documento/" + idHijo)
                    .then(respuesta => respuesta.json())
                    .then(hijo => {
                        docus = [...docus, hijo]

                        // Establezco los documentos, en el orden en el que aparecen
                        // en el array documento.hijos del padre
                        if (docus.length === hijos.length) {
                            let docs = hijos.map((idc) => {
                                let doc = docus.findIndex((d) => idc === d.id);
                                return docus[doc];
                            });
                            setDocumentos(docs);
                        }
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

    const [haRenderizado, renderiza] = useState(false);
    const [idAcordeon] = useState(_uniqueId('idAcordeon-'));
    const [idAcordeonContenido] = useState(_uniqueId('idAcordeonContenido-'));
    const [idAcordeonBotón] = useState(_uniqueId('idAcordeonBotón-'));

    const [, actualizaEstado] = React.useState();
    const fuerzaRenderizado = React.useCallback(() => actualizaEstado({}), []);

    useEffect(() => {
        fuerzaRenderizado();
    }, [renderiza, haRenderizado, documentos, fuerzaRenderizado]);

    return (
        <div id={idAcordeon} className="accordion accordion-flush bg-transparent w-100 m-0 p-0">

            {(acreditado) && (idRaíz !== 0) && (
                <>
                    <div className='m-0 p-0 d-flex flex-row align-items-center'>
                        <Link className='enlace m-0 p-0' to={"/edita/" + idRaíz + "/crea"}><i className="m-0 p-0 bi bi-file-earmark-plus fs-6 text-success"></i></Link>
                        <Link className='enlace m-0 p-0' to={"/edita/" + idRaíz + "/edita"}><i className="m-0 p-0 bi bi-file-earmark-text fs-6 text-primary"></i></Link>
                        <Link className='enlace m-0 p-0' to={"/edita/" + idRaíz + "/borra"}><i className="m-0 p-0 bi bi-file-earmark-x fs-6 text-danger"></i></Link>
                    </div>
                    <hr className="separador-horizontal" />
                </>
            )}

            {(cargando || documentos.length === 0) && (
                <center className="p-3"><h1><i className="bi bi-clock-history"></i></h1></center>
            )}

            {(!cargando && documentos.length > 0) && (
                <>
                    {
                        documentos.map((elemento) => {

                            return (
                                <div className="accordion-item bg-transparent m-0 p-0">

                                    {(elemento.hijos.length === 0 || profundidad >= 2) && (
                                        <AcordeonContenido profundidad={profundidad} documento={elemento} idContenido={idAcordeonContenido + "-" + elemento.id} idBotón={idAcordeonBotón + "-" + elemento.id} />
                                    )}

                                    {(elemento.hijos.length > 0 && profundidad < 2) && (
                                        <>
                                            <AcordeonBoton profundidad={profundidad} idPadre={idAcordeon} idContenido={idAcordeonContenido + "-" + elemento.id} idBotón={idAcordeonBotón + "-" + elemento.id} título={elemento.título} />
                                            <AcordeonContenido profundidad={profundidad} documento={elemento} idContenido={idAcordeonContenido + "-" + elemento.id} idBotón={idAcordeonBotón + "-" + elemento.id} />
                                        </>
                                    )}

                                </div>
                            )
                        })
                    }
                </>

            )}

            {(acreditado) && (idRaíz === 0) && (
                <div className='mt-2 m-0 p-0 d-flex flex-row align-items-center'>
                    <Link className='enlace m-0 p-0' to={"/edita/" + idRaíz + "/crea"}><i className="m-0 p-0 bi bi-file-earmark-plus fs-6 text-success"></i></Link>
                </div>
            )}
        </div>
    )
}

export default Acordeon
