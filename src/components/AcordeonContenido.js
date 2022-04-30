import Acordeon from "./Acordeon"

const AcordeonContenido = ({ contenido }) => {

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
        <div id="acordeon-1-contenido-1" className="accordion-collapse collapse ms-3" aria-labelledby="acordeon-1-cabecera-1" data-bs-parent="#acordeon-1">
            <div className="accordion-body">

                {terminal ?
                    <>{contenido}</>
                    :
                    <Acordeon jerarquía={contenido} />
                }
            </div>
        </div>
    )
}

export default AcordeonContenido
