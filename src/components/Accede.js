import React from 'react';
import { useRef, useState, useEffect } from 'react';
import Boton from './Boton';

function Accede() {
    const refUsuario = useRef();
    const refError = useRef();

    const [usuario, setUsuario] = useState('');
    const [clave, setClave] = useState('');
    const [msjError, setMsjError] = useState('');
    const [éxito, setÉxito] = useState(true);

    useEffect(() => {
        refUsuario.current.focus();
    }, []);

    useEffect(() => {
        setMsjError('lorem ipsum dolor sine amet');
    }, [usuario, clave]);

    return (
        <div className='shadow rounded-3 p-4' style={{ width: "31rem", outline: "1px solid #ddd" }}>
            <form>
                <div className="input-group mb-3">
                    <span id="etiqueta-usuario" className='input-group-text my-0 py-0' style={{ width: "5rem" }}>Usuario</span>
                    <input
                        type="text"
                        id="usuario"
                        className='form-control my-0 py-0'
                        ref={refUsuario}
                        autoComplete="off"
                        onChange={(e) => setUsuario(e.target.value)}
                        value={usuario}
                        aria-label="Usuario"
                        aria-describedby="etiqueta-usuario"
                        required
                    />
                </div>
                <div className="input-group mb-3">
                    <span id="etiqueta-clave" className='input-group-text my-0 py-0' style={{ width: "5rem" }}>Clave</span>
                    <input
                        type="password"
                        id="clave"
                        className='form-control my-0 py-0'
                        onChange={(e) => setClave(e.target.value)}
                        value={clave}
                        required
                    />
                </div>
                <div className='input-group pe-1' style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "nowrap" }}>
                    <div ref={refError} className={"rounded-3 " + éxito ? "msjerror" : "oculto"} style={{ width: "20rem", height: "3rem" }} aria-live="assertive">{msjError}</div>
                    <Boton texto="Entra" />
                </div>
            </form>
        </div>
    )
}

export default Accede