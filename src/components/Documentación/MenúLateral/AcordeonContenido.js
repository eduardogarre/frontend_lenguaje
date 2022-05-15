
import { Link } from 'react-router-dom'
import Acordeon from "./Acordeon"

const AcordeonContenido = ({ contenido, idArtículo, idContenido, idBotón }) => {

    let terminal = true

    if (typeof contenido === 'string' || contenido instanceof String) {
        terminal = true
        console.log("AcordeonContenido - Texto terminal: " + contenido)
    }
    else {
        terminal = false
        console.log("AcordeonContenido - Serie de hijos:")
        console.log(contenido)
    }

    return (
        <div id={idContenido} className={"accordion-collapse bg-transparent m-0 p-0" + (terminal ? " show" : " ms-4 collapse")} aria-labelledby={terminal ? "" : idBotón}>
            <div className="accordion-body enlace d-flex flex-row align-items-center bg-transparent m-0 p-0 py-2">

                {terminal ?
                    <>
                        <Link to={`/documentacion/${idArtículo}`}><strong>{contenido}</strong></Link>
                        <Link className='enlacem-0 p-0' to={"/edita/" + idArtículo + "/crea"}>
                            <i className="m-0 p-0 bi bi-plus fs-3"></i>
                        </Link>
                    </>
                    :
                    <Acordeon jerarquía={contenido} />
                }

            </div>
        </div>
    )
}

export default AcordeonContenido
