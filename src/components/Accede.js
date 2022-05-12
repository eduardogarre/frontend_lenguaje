import React from 'react';
import { useRef, useState, useEffect } from 'react';
import Boton from './Boton';

function Accede() {
    const refUsuario = useRef();
    const refError = useRef();

    const [usuario, setUsuario] = useState('');
    const [clave, setClave] = useState('');
    const [msjError, setMsjError] = useState('');
    const [éxito, setÉxito] = useState(false);

    useEffect(() => {
        refUsuario.current.focus();
    }, []);

    useEffect(() => {
        setMsjError('');
    }, [usuario, clave]);

    return (
        <div className='shadow rounded-3 fs-6 p-4' style={{width: "31rem", outline: "1px solid #01756f"}}>
            <p ref={refError} className={msjError ? "msjerror" : "oculto"} aria-live="assertive">{msjError}</p>
            <form>
                <div className="input-group mb-3">
                    <span id="etiqueta-usuario" className='input-group-text my-0 py-0' style={{width: "5rem", height: "3rem"}}>Usuario</span>
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
                <div className="input-group mb-2">
                    <span id="etiqueta-clave" className='input-group-text my-0 py-0' style={{width: "5rem", height: "3rem"}}>Clave</span>
                    <input
                        type="password"
                        id="clave"
                        className='form-control my-0 py-0'
                        onChange={(e) => setClave(e.target.value)}
                        value={clave}
                        required
                    />
                </div>
                <br />
                <Boton texto="Entra" />
            </form>
        </div>
    )
}

export default Accede