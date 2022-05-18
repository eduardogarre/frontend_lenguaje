import Apartado from "./Apartado"

const ListaApartados = ({ documento }) => {
    console.log("LISTA APARTADOS")
    return (
        <div className="lista-de-apartados ms-5 my-2 text-muted small">
            <h6 onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' })}} className="text-decoration-underline cursor-flecha">{documento.título}</h6>
            {(documento) &&
                documento.hijos.map((hijo) => <Apartado documento={hijo} />)
            }

        </div>
    )
}

export default ListaApartados
