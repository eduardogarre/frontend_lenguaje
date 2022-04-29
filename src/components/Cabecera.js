import PropTypes from 'prop-types'
import { useState } from 'react'
import logo from '../img/logo21.png'

const Cabecera = () => {

    const [menuColapsado, setMenuColapsado] = useState(true)

    const accionaNav = () => {
        console.log("antes: " + menuColapsado)
        setMenuColapsado(!menuColapsado)
        console.log("después: " + menuColapsado)
        console.log(" ")
    }

    return (
        <nav id="cabecera" className="cristal navbar fixed-top navbar-expand-md navbar-nav navbar-light border-bottom m-0 p-0">
            <div class="container-fluid m-2 p-0">
                <a className="marca navbar-brand m-0 mt-1 p-0" href="#" style={{ fontWeight: 400 }}>
                    &nbsp;Lenguaje&nbsp;
                    <img src={logo} alt="" style={{ width: "2.7rem", height: "2.7rem" }} className="d-inline-block align-text-bottom" />
                </a>

                <button className="navbar-toggler me-4" onClick={accionaNav} type="button" data-toggle="collapse" data-target="#barraNavEnlaces" aria-controls="barraNavEnlaces" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <ul id="barraNavEnlaces" className={"mr-auto collapse navbar-collapse justify-content-end m-0" + (menuColapsado ? " collapse" : " show")}>
                    <div className="navbar-nav">
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
