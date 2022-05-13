import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
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
        setMsjError('lorem ipsum dolor sine amet');
    }, [usuario, clave]);

    const manejaEnvío = async (e) => {
        e.preventDefault();
        console.log(usuario, clave);
        setUsuario("");
        setClave("");
        setÉxito(true);
    }

    return (
        <div className="container mw-100 p-3" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
            <div className='shadow rounded-3 p-4' style={{ width: "31rem", outline: "1px solid #ddd" }}>
                {éxito ? (
                    <>
                        <h1>¡Acceso concedido!</h1>
                        <br />
                        <p>
                            <Link to='/'>Vuelve al Inicio</Link>
                        </p>
                    </>
                ) : (

                    <form onSubmit={manejaEnvío}>
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
                            <div ref={refError} className={"rounded-3 " + (éxito ? "msjerror" : "oculto")} style={{ width: "20rem", height: "3rem" }} aria-live="assertive">{msjError}</div>
                            <div></div>
                            <Boton texto="Entra" />
                        </div>
                    </form>
                )
                }
            </div>
        </div>
    )
}

export default Accede