import Acordeon from "./Acordeon"

const AcordeonContenido = ({ contenido, idPadre, idContenido, idBotón }) => {

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
        <div id={idContenido} className={"accordion-collapse" + (terminal ? " show" : " ms-3 collapse")} aria-labelledby={terminal ? "" : idBotón}>
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
