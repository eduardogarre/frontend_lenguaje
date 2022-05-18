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
            <h3 id={documento.referencia}>{documento.título}</h3>
            <br />
            <div ref={refVisorDocumento}></div>

            {(documento.hijos.length > 0) ?
                (
                    documento.hijos.map((elemento) => {
                        return (
                            <VisorDocumento documento={elemento} />
                        )
                    })
                )
                :
                (
                    <></>
                )
            }
        </div>
    )
}

export default VisorDocumento
