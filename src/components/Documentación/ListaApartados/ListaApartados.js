import Apartado from "./Apartado"

const ListaApartados = ({ documento }) => {
    console.log("LISTA APARTADOS")
    return (
        <div className="lista-de-apartados ms-5 my-2 text-muted small">
            <h6 className="text-decoration-underline">En esta página</h6>
            {(documento) &&
                documento.hijos.map((hijo) => <Apartado documento={hijo} />)
            }

        </div>
    )
}

export default ListaApartados
