import React, { useCallback, useEffect, useState } from "react";
import { servidor } from "../../../Configuración";
import { Link } from 'react-router-dom'
import AcordeonBoton from "./AcordeonBoton"
import AcordeonContenido from "./AcordeonContenido"
import _uniqueId from 'lodash/uniqueId';

const Acordeon = ({ idRaíz }) => {

    const [cargando, setCargando] = useState(true);
    const [documentos, setDocumentos] = useState([]);

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

    const [haRenderizado, renderiza] = useState(false);
    const [idAcordeon] = useState(_uniqueId('idAcordeon-'));
    const [idAcordeonContenido] = useState(_uniqueId('idAcordeonContenido-'));
    const [idAcordeonBotón] = useState(_uniqueId('idAcordeonBotón-'));

    const [, actualizaEstado] = React.useState();
    const fuerzaRenderizado = React.useCallback(() => actualizaEstado({}), []);

    console.log("Acordeon: Documentos recibidos: ");
    console.log(documentos);

    useEffect(() => {
        fuerzaRenderizado();
    }, [renderiza, haRenderizado, documentos, fuerzaRenderizado]);

    return (
        <div id={idAcordeon} className="accordion accordion-flush bg-transparent w-100 m-0 p-0">


            {(cargando || documentos.length === 0) && (
                <center className="p-3"><h1><i className="bi bi-clock-history"></i></h1></center>
            )}

            {(!cargando && documentos.length > 0) && (
                <>
                    {
                        documentos.map((elemento) => {
                            console.log("Acordeon: documentos.map() ... elemento N \n");
                            console.log(elemento);

                            return (
                                <div className="accordion-item bg-transparent m-0 p-0">

                                    {(elemento.hijos.length > 0) && (
                                        <>
                                            <AcordeonBoton idPadre={idAcordeon} idContenido={idAcordeonContenido + "-" + elemento.id} idBotón={idAcordeonBotón + "-" + elemento.id} título={elemento.id + " " + elemento.título} />
                                            <AcordeonContenido documento={elemento} idContenido={idAcordeonContenido + "-" + elemento.id} idBotón={idAcordeonBotón + "-" + elemento.id} />
                                        </>
                                    )}

                                    {(elemento.hijos.length === 0) && (
                                        <AcordeonContenido documento={elemento} idContenido={idAcordeonContenido + "-" + elemento.id} idBotón={idAcordeonBotón + "-" + elemento.id} />
                                    )}

                                </div>
                            )
                        })
                    }
                </>

            )}

            <div className='mt-1 m-0 p-0 d-flex flex-row align-items-center'>
                <Link className='enlace m-0 p-0' to={"/edita/" + idRaíz + "/crea"}><i className="m-0 p-0 bi bi-file-earmark-plus fs-5"></i></Link>
                {(idRaíz !== 0) && (
                    <>
                        <Link className='enlace m-0 p-0' to={"/edita/" + idRaíz + "/edita"}><i className="m-0 p-0 bi bi-file-earmark-text fs-5"></i></Link>
                        <Link className='enlace m-0 p-0' to={"/edita/" + idRaíz + "/borra"}><i className="m-0 p-0 bi bi-file-earmark-x fs-5"></i></Link>
                    </>
                )}
            </div>
        </div>
    )
}

export default Acordeon
