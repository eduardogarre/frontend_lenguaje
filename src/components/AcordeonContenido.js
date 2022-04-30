const AcordeonContenido = ({contenido}) => {
    return (
        <div id="acordeon-1-contenido-1" className="accordion-collapse collapse ms-3" aria-labelledby="acordeon-1-cabecera-1" data-bs-parent="#acordeon-1">
            <div className="accordion-body">
                {contenido}
            </div>
        </div>
    )
}

export default AcordeonContenido
