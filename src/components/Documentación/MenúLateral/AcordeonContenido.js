
import { Link } from 'react-router-dom'
import Acordeon from "./Acordeon"

const AcordeonContenido = ({ documento, idContenido, idBotón }) => {

    let terminal = false

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
        <div id={idContenido} className={"accordion-collapse bg-transparent m-0 p-0" + (terminal ? " show" : " ms-4 collapse")} aria-labelledby={terminal ? "" : idBotón}>
            <div className="accordion-body enlace d-flex flex-row align-items-center bg-transparent m-0 p-0 py-1">

                {terminal ?
                    <>
                        <Link to={`/documentacion/${documento.id}`}><strong>{documento.id + " " + documento.título}</strong></Link>
                        <Link className='enlacem-0 p-0' to={"/edita/" + documento.id + "/crea"}>
                            <i className="m-0 p-0 bi bi-plus fs-3"></i>
                        </Link>
                    </>
                    :
                    <Acordeon idRaíz={documento.id} />
                }

            </div>
        </div>
    )
}

export default AcordeonContenido
