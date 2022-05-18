
const Apartado = ({documento}) => {
    console.log("LISTA APARTADOS")
    return (
        <div>{documento.id + " " + documento.título}</div>
    )
}

export default Apartado
