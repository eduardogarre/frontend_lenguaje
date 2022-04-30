const AcordeonBoton = ({título, idPadre, idContenido, idBotón}) => {
    console.log("AcordeonBoton: " + título)
    return (
        <h2 id={idBotón} className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#" + idContenido} aria-expanded="true" aria-controls={idContenido}>
                {título}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </button>
        </h2>
    )
}

export default AcordeonBoton
