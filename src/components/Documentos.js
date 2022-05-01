import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const Documentos = () => {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };

    return (
        <>
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
                        'insertdatetime', 'media', 'table', 'preview', 'save', 'help', 'wordcount'
                    ],
                    toolbar: 'save | preview | undo redo | fontfamily fontsize | ' +
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
            <button onClick={log}>Log editor content</button>
        </>
    )
}

export default Documentos
