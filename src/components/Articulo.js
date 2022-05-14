import { useRef, useEffect } from "react";
import {nodeScriptReplace, ejecutaHLJS} from "../herramientas"

const Artículo = ({ título, texto }) => {
    
    const refVisorDocumento = useRef();

    useEffect(() => {
        refVisorDocumento.current.innerHTML = "";
        refVisorDocumento.current.innerHTML = texto + ejecutaHLJS;

        nodeScriptReplace(refVisorDocumento.current);
    }, []);

    return (
        <div style={{overflowWrap: "break-word"}}>
            <h3>{título}</h3>
            <br />
            <div ref={refVisorDocumento}></div>
        </div>
    )
}

export default Artículo
