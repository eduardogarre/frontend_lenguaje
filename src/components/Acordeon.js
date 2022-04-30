import AcordeonBoton from "./AcordeonBoton"
import AcordeonContenido from "./AcordeonContenido"

const Acordeon = ({ jerarquía }) => {

    console.log("Acordeon: " + jerarquía)

    return (
        <div id="acordeon-1" className="accordion">
            {
                jerarquía.map((elemento) => {
                    console.log("Acordeon: jerarquía.map() ... elemento N \n" + elemento)
                    return (
                        <div className="accordion-item">

                            {(elemento.hijos.length > 0) && (
                                <>
                                    <AcordeonBoton título={elemento.id + " " + elemento.título} />
                                    <AcordeonContenido contenido={elemento.hijos} />
                                </>
                            )}

                            {(elemento.hijos.length === 0) && (
                                <AcordeonContenido contenido={elemento.id + " " + elemento.título} />
                            )}

                        </div>
                    )
                })
            }
        </div>
    )
}

export default Acordeon
