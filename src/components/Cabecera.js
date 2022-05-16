import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../img/logo21.png';
import { ContextoAcreditado } from "../contexto/Acreditación";

const Cabecera = ({desacredita}) => {

    const {acreditado} = useContext(ContextoAcreditado);

    const [menuColapsado, setMenuColapsado] = useState(true)

    const accionaNav = () => {
        setMenuColapsado(!menuColapsado)
    }

    return (
        <nav id="cabecera" className="cristal navbar fixed-top navbar-expand-md navbar-nav navbar-light border-bottom m-0 p-0">
            <div className="container-fluid m-2 px-2">
                <Link className="marca navbar-brand m-0 mt-1 p-0" to="/" style={{ fontWeight: 400 }}>
                    &nbsp;Lenguaje&nbsp;
                    <img src={logo} alt="" style={{ width: "2.7rem", height: "2.7rem" }} className="d-inline-block align-text-bottom" />
                </Link>

                <button className="navbar-toggler me-4" onClick={accionaNav} type="button" data-toggle="collapse" data-target="#barraNavEnlaces" aria-controls="barraNavEnlaces" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <ul id="barraNavEnlaces" className={"mr-auto collapse navbar-collapse justify-content-end m-0 me-2" + (menuColapsado ? " collapse" : " show")}>
                    <div className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="#">Descarga</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/documentacion">Documentación</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" target="_blank" rel="noreferrer" href="https://github.com/eduardogarre/lenguaje">Proyecto</a>
                        </li>
                        <li className="nav-item">
                            {(!acreditado) && (
                                <Link className="nav-link" to="/accede">Accede</Link>
                            )}
                            {(acreditado) && (
                                <a className="nav-link" href="/" onClick={desacredita}>Cierra</a>
                            )}
                        </li>
                    </div>
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

export default Cabecera
