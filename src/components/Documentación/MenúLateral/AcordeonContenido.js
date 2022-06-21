import { Link } from 'react-router-dom'
import Acordeon from "./Acordeon"

const AcordeonContenido = ({ documento, idContenido, idBotón, profundidad }) => {

    let terminal = false

    if (documento.hijos.length === 0 || profundidad === 2) {
        terminal = true
    }
    else {
        terminal = false
    }

    return (
        <div id={idContenido} onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' })}} className={"accordion-collapse bg-transparent m-0 p-0" + (terminal ? " show" : " ms-3 collapse")} aria-labelledby={terminal ? "" : idBotón}>
            <div className="accordion-body enlace d-flex flex-row align-items-center justify-content-between bg-transparent m-0 p-0 py-1">

                {terminal ?
                    <Link to={`/documentacion/${documento.id}`}><strong>{documento.título}</strong></Link>
                    :
                    <Acordeon idRaíz={documento.id} profundidad={profundidad + 1} />
                }

            </div>
        </div>
    )
}

export default AcordeonContenido
