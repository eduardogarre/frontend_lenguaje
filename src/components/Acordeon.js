import React, { useState } from 'react';
import AcordeonBoton from "./AcordeonBoton"
import AcordeonContenido from "./AcordeonContenido"
import _uniqueId from 'lodash/uniqueId';

const Acordeon = ({ documentos }) => {

    console.log("Acordeon: " + documentos)
    const [idAcordeon] = useState(_uniqueId('idAcordeon-'));
    const [idAcordeonContenido] = useState(_uniqueId('idAcordeonContenido-'));
    const [idAcordeonBotón] = useState(_uniqueId('idAcordeonBotón-'));

    return (
        <div id={idAcordeon} className="accordion accordion-flush bg-transparent w-100 m-0 p-0">
            {
                documentos.map((elemento) => {
                    console.log("Acordeon: documentos.map() ... elemento N \n" + elemento)
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
        </div>
    )
}

export default Acordeon
