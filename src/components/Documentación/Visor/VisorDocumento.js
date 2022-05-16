import { useRef, useEffect } from "react";
import { nodeScriptReplace, ejecutaHLJS } from "../../../herramientas"

const VisorDocumento = ({ título, texto }) => {

    const refVisorDocumento = useRef();

    useEffect(() => {
        refVisorDocumento.current.innerHTML = "";
        refVisorDocumento.current.innerHTML = texto + ejecutaHLJS;

        nodeScriptReplace(refVisorDocumento.current);
    }, [texto]);

    return (
        <div style={{ overflowWrap: "break-word" }}>
            <h3>{título}</h3>
            <br />
            <div ref={refVisorDocumento}></div>
        </div>
    )
}

export default VisorDocumento
