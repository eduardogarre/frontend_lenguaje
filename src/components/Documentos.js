import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Boton from './Boton';

/*
Ver más en https://stackoverflow.com/questions/1197575/can-scripts-be-inserted-with-innerhtml/20584396#20584396
"A method that recursively replaces all scripts with executable ones", del usuario Mjs
*/
function nodeScriptReplace(node) {
    if ( nodeScriptIs(node) === true ) {
            node.parentNode.replaceChild( nodeScriptClone(node) , node );
    }
    else {
            var i = -1, children = node.childNodes;
            while ( ++i < children.length ) {
                  nodeScriptReplace( children[i] );
            }
    }

    return node;
}
function nodeScriptClone(node){
    var script  = document.createElement("script");
    script.text = node.innerHTML;

    var i = -1, attrs = node.attributes, attr;
    while ( ++i < attrs.length ) {                                    
          script.setAttribute( (attr = attrs[i]).name, attr.value );
    }
    return script;
}

function nodeScriptIs(node) {
    return node.tagName === 'SCRIPT';
}
///////////////////

let raiz;

const ejecutaHLJS = `
<script>
Array.from(document.getElementsByClassName('language-none')).forEach((elemento) => {
    elemento.className = "";
});
hljs.highlightAll();
</script>
`

const Documentos = () => {
    const editorRef = useRef(null);

    const handleSubmit = (e) => {

        let contenidoEditor

        if (editorRef.current) {
            contenidoEditor = editorRef.current.getContent();
        }

        const código = contenidoEditor + ejecutaHLJS

        console.log('Contenido Editor')
        console.log(código)

        raiz = document.getElementById("raiz")

        raiz.innerHTML = ""
        raiz.innerHTML = código

        nodeScriptReplace(raiz);

        e.preventDefault();
        return false;
    }

    return (
        <>
            <form action='/api/v1/documento' onSubmit={handleSubmit} onClick={handleSubmit}>
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    initialValue="<p>This is the initial content of the editor.</p>"
                    init={{
                        height: 500,
                        menubar: false,
                        language: 'es',
                        plugins: [
                            'quickbars', 'advlist', 'autolink', 'lists', 'code', 'codesample', 'link', 'image', 'charmap',
                            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                            'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
                        ],
                        toolbar: 'preview | undo redo | fontfamily fontsize | ' +
                            'bold italic forecolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'styles | codesample code | hr | removeformat | help',
                        codesample_languages: [
                            { text: 'Ñ', value: 'ñ' },
                            { text: 'JavaScript', value: 'javascript' },
                            { text: 'CSS', value: 'css' },
                            { text: 'html', value: 'html' },
                            { text: 'Shell', value: 'shell' },
                            { text: 'Powershell', value: 'owershell' }
                        ],
                        codesample_global_prismjs: true,
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                />
                <Boton texto="Guarda" onClick={handleSubmit} />
            </form>
            <div id="raiz"></div>
        </>
    )
}

export default Documentos
