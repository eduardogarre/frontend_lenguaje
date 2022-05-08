const AcordeonBoton = ({ título, idContenido, idBotón }) => {
    console.log("AcordeonBoton: " + título)
    return (
        <h2 id={idBotón} className="accordion-header bg-transparent m-0 p-0">
            <button className="accordion-button enlace bg-transparent collapsed m-0 p-0 py-2" type="button" data-bs-toggle="collapse" data-bs-target={"#" + idContenido} aria-expanded="true" aria-controls={idContenido}>
                {título}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </button>
        </h2>
    )
}

export default AcordeonBoton
