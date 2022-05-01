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
            <div className="accordion-body enlace bg-transparent m-0 p-0 py-2">

                {terminal ?
                    <a href={"/aprende/" + idArtículo}>{contenido}</a>
                    :
                    <Acordeon jerarquía={contenido} />
                }
            </div>
        </div>
    )
}

export default AcordeonContenido
