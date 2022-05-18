
const Apartado = ({ documento }) => {
    console.log("Apartado " + documento.referencia);

    const deslízateHastaElemento = () => {
        const id = documento.referencia;
        const margenSuperior = -75;
        const elemento = document.getElementById(id);
        const y = elemento.getBoundingClientRect().top + window.pageYOffset + margenSuperior;

        window.scrollTo({ top: y, behavior: 'smooth' });
    }

    return (
        <>
            <div className="ms-3 cursor-flecha">
                <a onClick={deslízateHastaElemento}>{documento.título}</a>
            </div>
            <div className="ms-3 mt-2">
            {(documento) && (
                documento.hijos.map(hijo => <Apartado documento={hijo} />)
            )}
            </div>
        </>
    )
}

export default Apartado
