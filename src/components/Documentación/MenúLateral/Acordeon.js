import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import AcordeonBoton from "./AcordeonBoton"
import AcordeonContenido from "./AcordeonContenido"
import _uniqueId from 'lodash/uniqueId';

const Acordeon = ({ idRaíz, documentos }) => {

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
            
            {
                documentos.map((elemento) => {
                    console.log("Acordeon: documentos.map() ... elemento N \n");
                    console.log(elemento);

                    return (
                        <div className="accordion-item bg-transparent m-0 p-0">

                            {(elemento.hijos.length > 0) && (
                                <>
                                    <AcordeonBoton idPadre={idAcordeon} idContenido={idAcordeonContenido + "-" + elemento.id} idBotón={idAcordeonBotón + "-" + elemento.id} título={elemento.id + " " + elemento.título} />
                                    <AcordeonContenido idPadre={idAcordeon} idArtículo={elemento.id} idContenido={idAcordeonContenido + "-" + elemento.id} idBotón={idAcordeonBotón + "-" + elemento.id} contenido={elemento.hijos} />
                                </>
                            )}

                            {(elemento.hijos.length === 0) && (
                                <AcordeonContenido idPadre={idAcordeon} idArtículo={elemento.id} idContenido={idAcordeonContenido + "-" + elemento.id} idBotón={idAcordeonBotón + "-" + elemento.id} contenido={elemento.id + " " + elemento.título} />
                            )}

                        </div>
                    )
                })
            }
            <div className='mt-1 m-0 p-0'>
                <Link className='enlace d-flex flex-row align-items-center m-0 p-0' to={"/edita/" + idRaíz + "/crea"}>
                    <i className="m-0 p-0 bi bi-plus fs-3"></i>
                    <strong>Añade</strong>
                </Link>
            </div>
        </div>
    )
}

export default Acordeon
