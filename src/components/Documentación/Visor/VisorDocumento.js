import { useRef, useEffect } from "react";
import { nodeScriptReplace, ejecutaHLJS } from "../../../herramientas"

const VisorDocumento = ({ documento, profundidad, profundiza }) => {

    const refVisorDocumento = useRef();

    useEffect(() => {
        refVisorDocumento.current.innerHTML = "";
        refVisorDocumento.current.innerHTML = documento.contenido + ejecutaHLJS;

        nodeScriptReplace(refVisorDocumento.current);
    }, [documento]);

    const estiloTítulo = {
        fontSize: Math.max(16, (36 - profundidad * 5)) + "px",
        color: "rgb(" +
            Math.min(190, (profundidad * 40)) + ", " +
            Math.min(190, (profundidad * 40)) + ", " +
            Math.min(190, (profundidad * 40)) +
            ")"
    }

    return (
        <div style={{ overflowWrap: "break-word" }}>
            <div style={estiloTítulo} id={documento.referencia}>{documento.título}</div>
            <div ref={refVisorDocumento}></div>

            {(profundiza && (documento.hijos.length > 0)) ?
                (
                    documento.hijos.map((elemento) => {
                        return (
                            <div className={"mt-4" + (profundidad > 4 ? " ms-4" : "")}>
                                <VisorDocumento documento={elemento} profundidad={profundidad + 1} profundiza={profundiza} />
                            </div>
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
