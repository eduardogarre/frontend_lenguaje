const AcordeonBoton = ({título}) => {
    return (
        <h2 id="acordeon-1-cabecera-1" className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#acordeon-1-contenido-1" aria-expanded="false" aria-controls="acordeon-1-contenido-1">
                {título}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </button>
        </h2>
    )
}

export default AcordeonBoton
