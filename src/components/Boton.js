import PropTypes from "prop-types"

const Boton = ({colorFondo, colorTexto, onClick, texto}) => {

    return (
            <button
                type="button"
                onClick={onClick}
                className="btn m-0 rounded-3"
                style={{color: colorTexto, backgroundColor: colorFondo}}
            >
                {texto}
            </button>
        )
}

Boton.defaultProps = {
    colorFondo: "MediumSpringGreen",
    colorTexto: "black",
    texto: "botón",
    onClick: () => {}
}

Boton.propTypes = {
    colorFondo: PropTypes.string,
    colorTexto: PropTypes.string,
    texto: PropTypes.string,
    onClick: PropTypes.func
}

export default Boton
