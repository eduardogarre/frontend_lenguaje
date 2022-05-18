
const Apartado = ({documento}) => {
    console.log("LISTA APARTADOS")
    return (
        <div>{documento.referencia + " " + documento.título}</div>
    )
}

export default Apartado
