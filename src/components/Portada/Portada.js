import Carrusel from "./Carrusel/Carrusel"
import Bienvenida from "./Bienvenida"

const Portada = () => {
    return (
        <div className="container mw-100 p-3" style={{width: "90rem", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center", columnGap: "10rem", rowGap: "5rem"}}>
            <Bienvenida />
            <Carrusel />
        </div>
    )
}

export default Portada
