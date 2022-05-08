import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Artículo from "./Articulo"

const Artículos = [
    {
        id: 0,
        título: "Inicio",
        texto: []
    },
    {
        id: 1,
        título: "Introducción",
        texto: [
            "Para poder programar, debes usar un lenguaje que tu ordenador entienda: un lenguaje de programación. Existen muchos lenguajes de programación, y en este tutorial te enseñaré a programar usando el lenguaje Ñ.",
            "Cuando escribes algo en un lenguaje humano como el español, lo que hayas escrito se llama 'texto'. Y cuando lo escribes en un lenguaje de programación, lo llamamos 'código'. En este tutorial encontrarás muchos ejemplos de código Ñ. Algunos te mostrarán pequeños trozos de programas, y la mayoría te mostrarán programas completos que podrás construir y ejecutar tú mismo.",
            "Para permitir que el código se pueda leer más fácilmente, solemos colorear las palabras clave con diferentes colores. En el código que leas en este tutorial verás que, por ejemplo, los números siempre aparecen de color <strong><span style='color:#005cc5'>azul</span></strong>."
        ]
    },
    {
        id: 2,
        título: "Instalación",
        texto: []
    },
    {
        id: 3,
        título: "Windows",
        texto: [
            "Pendiente"
        ]
    },
    {
        id: 4,
        título: "Linux",
        texto: [
            "Pendiente"
        ]
    },
    {
        id: 5,
        título: "macOS",
        texto: [
            "Pendiente"
        ]
    },
    {
        id: 6,
        título: "Hola, mundo",
        texto: [
            "Cuando se empieza a aprender un nuevo lenguaje de programación, desde hace décadas el primer programa que se escribe es el 'Hola mundo', el programa que muestra el texto \"Hola, mundo\" en la pantalla.",
            "Escribir y ejecutar con éxito el programa 'Hola, mundo' significa que has logrado completar todos los pasos siguientes:",
            "- Has escrito el código del programa en algún editor",
            "- Has guardado el código en tu disco, en algún archivo",
            "- Has instalado previamente el lenguaje de programación",
            "- Has construido el programa a partir del código",
            "- Has ejecutado el programa",
            "- Has encontrado el lugar donde tu programa ha escrito 'Hola, mundo'",
            "Por eso, conseguir completar todos esos pasos es el gran obstáculo. Una vez que domines todos esos detalles técnicos, progresar debería ser sencillo.",
            "## El código",
            "En Ñ, el código para escribir '¡Hola, mundo!' es"
        ]
    }
]

const Contenido = () => {

    const [estáCargando, setEstaCargando] = useState(true);
    const [contenidoArtículo, setContenidoArtículo] = useState(null);

    let params = useParams();

    let id = 0

    if (params.idArticulo != undefined) {
        id = params.idArticulo
    }
    else {
        id = 1
    }

    let artículo = Artículos.find((a) => a.id == id)

    useEffect(() => {
        fetch('http://localhost:8000/api/v1/documentos')
            .then(respuesta => respuesta.json())
            .then(dato => {
                setContenidoArtículo(dato.arr);
                setEstaCargando(false);
                console.log(dato);
            })
    }, []);

    if (estáCargando) { // Si está cargando, mostramos un texto que lo indique
        return (
            <center className="w-100">
                <div>
                    <h1><i className="bi bi-clock-history"></i></h1>
                </div>
            </center>
        );
    }
    else {
        return (
            <Artículo título={artículo.título} texto={artículo.texto} />
        )
    }
}

export default Contenido
