import { useEffect } from "react";
import {nodeScriptReplace} from "../herramientas"

const Artículo = ({ título, texto }) => {

    let visor_documento;

    useEffect(() => {
        visor_documento = document.getElementById("visor_documento");

        visor_documento.innerHTML = "";
        visor_documento.innerHTML = texto;

        nodeScriptReplace(visor_documento);
    }, []);

    return (
        <div style={{overflowWrap: "break-word"}}>
            <h3>{título}</h3>
            <br />
            <div id="visor_documento"></div>
        </div>
    )
}

export default Artículo
