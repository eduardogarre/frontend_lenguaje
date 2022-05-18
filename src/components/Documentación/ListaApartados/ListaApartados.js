import Apartado from "./Apartado"

const ListaApartados = ({ documento }) => {
    console.log("LISTA APARTADOS")
    return (
        <div className="lista-de-apartados ms-5">
            {(documento) &&
                documento.hijos.map((hijo) => <Apartado documento={hijo} />)
            }

        </div>
    )
}

export default ListaApartados
