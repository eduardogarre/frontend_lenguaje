import PropTypes from 'prop-types'
import Boton from './Boton'

const Cabecera = ({titulo}) => {
    return (
        <header className="cabecera">
            <h1>{titulo}</h1>
            <Boton color="green" texto="hola" />
        </header>
    )
}

Cabecera.defaultProps = {
    titulo: "Lenguaje Ñ",
}

Cabecera.defaultProps = {
    titulo: PropTypes.string.isRequired
}

//const estiloCabecera = {
//    color: "red",
//    backgroundColor: "black"
//}

export default Cabecera
