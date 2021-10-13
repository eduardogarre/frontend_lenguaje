import PropTypes from 'prop-types'
import Boton from './Boton'
import logo from '../img/logo21.png'

const Cabecera = ({titulo}) => {
    const reaccionaClick = (e) => {
        console.log(e)
    }

    return (
        <nav className="cabecera cristal navbar fixed-top navbar-expand-md navbar-nav navbar-light border-bottom">
            <div className="container-fluid">
                <a class="marca navbar-brand" href="#" style={{fontWeight: 300}}>
                    &nbsp;Lenguaje&nbsp;
                    <img src={logo} alt="" style={{width:"2.7rem", height:"2.7rem"}} class="d-inline-block align-text-bottom" />
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#barraNavEnlaces" aria-controls="barraNavEnlaces" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <ul id="barraNavEnlaces" className="navbar-nav mr-auto collapse navbar-collapse justify-content-end">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Descarga</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Aprende</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Documentación</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Proyecto</a>
                    </li>
                </ul>
            </div>
        </nav>
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
