import PropTypes from 'prop-types'
import Boton from './Boton'
import logo from '../img/logo21.png'

const Cabecera = ({titulo}) => {
    const reaccionaClick = (e) => {
        console.log(e)
    }

    return (
        <nav className="cabecera cristal bg-transparent navbar fixed-top navbar-expand-lg navbar-light border-bottom">
            <div className="container-fluid">
                <a class="marca navbar-brand" href="#">
                    Lenguaje &nbsp;
                    <img src={logo} alt="" style={{width:"2.5rem", height:"2.5rem"}} class="d-inline-block align-text-bottom" />
                </a>
                <div className="" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
