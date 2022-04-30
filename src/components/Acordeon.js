import React, { useState } from 'react';
import AcordeonBoton from "./AcordeonBoton"
import AcordeonContenido from "./AcordeonContenido"
import _uniqueId from 'lodash/uniqueId';

const Acordeon = ({ inicial, jerarquía }) => {

    console.log("Acordeon: " + jerarquía)
    const [idAcordeon] = useState(_uniqueId('idAcordeon-'));
    const [idAcordeonContenido] = useState(_uniqueId('idAcordeonContenido-'));
    const [idAcordeonBotón] = useState(_uniqueId('idAcordeonBotón-'));

    return (
        <div id={idAcordeon} className="accordion accordion-flush">
            {
                jerarquía.map((elemento) => {
                    console.log("Acordeon: jerarquía.map() ... elemento N \n" + elemento)
                    return (
                        <div className="accordion-item">

                            {(elemento.hijos.length > 0) && (
                                <>
                                    <AcordeonBoton idPadre={idAcordeon} idContenido={idAcordeonContenido + "-" + elemento.id} idBotón={idAcordeonBotón + "-" + elemento.id} título={elemento.id + " " + elemento.título} />
                                    <AcordeonContenido idPadre={idAcordeon} idContenido={idAcordeonContenido + "-" + elemento.id} idBotón={idAcordeonBotón + "-" + elemento.id} contenido={elemento.hijos} />
                                </>
                            )}

                            {(elemento.hijos.length === 0) && (
                                <AcordeonContenido idPadre={idAcordeon} idContenido={idAcordeonContenido + "-" + elemento.id} idBotón={idAcordeonBotón + "-" + elemento.id} contenido={elemento.id + " " + elemento.título} />
                            )}

                        </div>
                    )
                })
            }
        </div>
    )
}

export default Acordeon
