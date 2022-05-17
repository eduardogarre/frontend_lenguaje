import { useRef, useEffect } from "react";
import { nodeScriptReplace, ejecutaHLJS } from "../../../herramientas"

const VisorDocumento = ({ documento }) => {

    const refVisorDocumento = useRef();

    useEffect(() => {
        refVisorDocumento.current.innerHTML = "";
        refVisorDocumento.current.innerHTML = documento.contenido + ejecutaHLJS;

        nodeScriptReplace(refVisorDocumento.current);
    }, [documento]);

    return (
        <div style={{ overflowWrap: "break-word" }}>
            <h3>{documento.título}</h3>
            <br />
            <div ref={refVisorDocumento}></div>
        </div>
    )
}

export default VisorDocumento
