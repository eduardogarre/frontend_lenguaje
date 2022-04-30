import AcordeonBoton from "./AcordeonBoton"
import AcordeonContenido from "./AcordeonContenido"

const Acordeon = () => {
    return (
        <div id="acordeon-1" className="accordion">
            <div className="accordion-item">
                <AcordeonBoton título={"Prefacio"}/>
                <AcordeonContenido contenido={<a href="/">Portada</a>}/>
            </div>
        </div>
    )
}

export default Acordeon
