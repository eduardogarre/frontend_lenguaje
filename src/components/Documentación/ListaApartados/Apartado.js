
const Apartado = ({ documento }) => {
    console.log("LISTA APARTADOS")

    const deslízateHastaElemento = () => {
        const id = documento.referencia;
        const margenSuperior = -75;
        const elemento = document.getElementById(id);
        const y = elemento.getBoundingClientRect().top + window.pageYOffset + margenSuperior;

        window.scrollTo({ top: y, behavior: 'smooth' });
    }

    return (
        <div>
            <a onClick={deslízateHastaElemento}>{documento.referencia + " " + documento.título}</a>
        </div>
    )
}

export default Apartado
