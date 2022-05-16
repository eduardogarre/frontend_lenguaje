import React, { useRef, useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Boton from '../Boton';
import { servidor } from '../../Configuración';
import { ContextoAcreditado } from '../../contexto/Acreditación';

function Acceso({ acredita, desacredita }) {
    const refUsuario = useRef();
    const refError = useRef();

    const [usuario, setUsuario] = useState('');
    const [clave, setClave] = useState('');
    const [msjError, setMsjError] = useState('');
    const [éxito, setÉxito] = useState(false);

    useEffect(() => {
        refUsuario.current.focus();
    }, []);

    const manejaEnvío = async (e) => {
        setMsjError("");

        e.preventDefault();
        console.log(usuario, clave);

        let datosAcceso = {
            usuario: usuario,
            clave: clave
        };

        let respuesta
        try {
            respuesta = await fetch(servidor + "/api/v1/sesión", {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                mode: 'cors', // no-cors, cors, same-origin
                cache: 'no-cache',
                body: JSON.stringify(datosAcceso),
            });
            if (respuesta.status !== 200) {
                setMsjError("Error, credenciales incorrectas");
            }
            else if (respuesta.status === 200) {
                try {
                    let sesión = await respuesta.json()
                    console.log(sesión);
                    setUsuario("");
                    setClave("");
                    setÉxito(true);
                    acredita();
                }
                catch (err) {

                }
            }
        }
        catch (err) {
            setMsjError("Error al conectar con el servidor");
        }
    }

    return (
        <div className="container mw-100 p-3" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
            <div className='shadow rounded-3 p-4' style={{ width: "31rem", outline: "1px solid #ddd" }}>
                {éxito ? (
                    <Navigate to="/" />
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
                            <div ref={refError} className={"rounded-3 text-center " + (msjError.length > 0 ? "msjerror" : "oculto")} style={{ width: "20rem", height: "3rem" }} aria-live="assertive">{msjError}</div>
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

export default Acceso