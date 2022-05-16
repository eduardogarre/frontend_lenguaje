
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import Acordeon from "./Acordeon"
import { ContextoAcreditado } from "../../../contexto/Acreditación";

const AcordeonContenido = ({ documento, idContenido, idBotón }) => {

    let terminal = false

    const {acreditado} = useContext(ContextoAcreditado);

    if (documento.hijos.length === 0) {
        terminal = true
        console.log("AcordeonContenido - Texto terminal: " + documento.contenido)
    }
    else {
        terminal = false
        console.log("AcordeonContenido: Serie de hijos:")
        console.log(documento.contenido)
    }

    return (
        <div id={idContenido} className={"accordion-collapse bg-transparent m-0 p-0" + (terminal ? " show" : " ms-3 collapse")} aria-labelledby={terminal ? "" : idBotón}>
            <div className="accordion-body enlace d-flex flex-row align-items-center justify-content-between bg-transparent m-0 p-0 py-1">

                {terminal ?
                    <>
                        <Link to={`/documentacion/${documento.id}`}><strong>{documento.id + " " + documento.título}</strong></Link>

                        {(acreditado) && (<div>
                            <Link className='enlace m-0 p-0' to={"/edita/" + documento.id + "/crea"}><i className="m-0 p-0 bi bi-file-earmark-plus fs-6 text-success"></i></Link>
                            <Link className='enlace m-0 p-0' to={"/edita/" + documento.id + "/edita"}><i className="m-0 p-0 bi bi-file-earmark-text fs-6 text-primary"></i></Link>
                            <Link className='enlace m-0 p-0' to={"/edita/" + documento.id + "/borra"}><i className="m-0 p-0 bi bi-file-earmark-x fs-6 text-danger"></i></Link>
                        </div>
                        )}
                    </>
                    :
                    <Acordeon idRaíz={documento.id} />
                }

            </div>
        </div>
    )
}

export default AcordeonContenido
