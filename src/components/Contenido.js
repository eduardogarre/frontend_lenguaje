import { useParams } from "react-router-dom";
import Artículo from "./Articulo"

const Artículos = [
    {
        id: 0,
        título: "Inicio",
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas sed tempus. Volutpat diam ut venenatis tellus in metus vulputate eu. Tempor nec feugiat nisl pretium fusce id velit ut. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Ullamcorper morbi tincidunt ornare massa. Ornare arcu dui vivamus arcu felis bibendum. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Ut tortor pretium viverra suspendisse."
    },
    {
        id: 1,
        título: "Introducción",
        texto: "Maecenas sed enim ut sem viverra aliquet eget. Bibendum arcu vitae elementum curabitur vitae. Placerat in egestas erat imperdiet sed euismod nisi porta lorem. Eu turpis egestas pretium aenean pharetra. Convallis tellus id interdum velit laoreet id. Vitae congue mauris rhoncus aenean vel. Tincidunt vitae semper quis lectus nulla. Eget duis at tellus at urna condimentum. Ultricies mi eget mauris pharetra. Velit ut tortor pretium viverra suspendisse potenti nullam. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget. Lacus viverra vitae congue eu consequat ac felis. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Est ullamcorper eget nulla facilisi etiam dignissim diam quis. Magna etiam tempor orci eu. Ipsum consequat nisl vel pretium lectus quam id leo. Eu lobortis elementum nibh tellus molestie nunc non blandit massa."
    },
    {
        id: 2,
        título: "Instalación",
        texto: "Dis parturient montes nascetur ridiculus. Lacinia quis vel eros donec. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Risus commodo viverra maecenas accumsan lacus. At ultrices mi tempus imperdiet nulla malesuada. Felis donec et odio pellentesque diam volutpat commodo sed. Mi quis hendrerit dolor magna eget. Scelerisque in dictum non consectetur a. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Et tortor at risus viverra adipiscing at. Tellus id interdum velit laoreet id donec ultrices. Donec et odio pellentesque diam volutpat commodo sed egestas. Mi ipsum faucibus vitae aliquet nec. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem. Lectus arcu bibendum at varius vel pharetra. Nunc sed blandit libero volutpat sed cras ornare. Morbi tempus iaculis urna id volutpat lacus laoreet non."
    },
    {
        id: 3,
        título: "Windows",
        texto: "Vitae aliquet nec ullamcorper sit amet risus nullam. Cras pulvinar mattis nunc sed blandit libero. Quis commodo odio aenean sed adipiscing. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Etiam erat velit scelerisque in dictum non consectetur a. Magna fermentum iaculis eu non diam phasellus. Amet venenatis urna cursus eget nunc scelerisque. Id ornare arcu odio ut. Urna nec tincidunt praesent semper feugiat nibh sed. Donec adipiscing tristique risus nec feugiat in. Pellentesque habitant morbi tristique senectus et. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Nulla malesuada pellentesque elit eget."
    },
    {
        id: 4,
        título: "Linux",
        texto: "Ultrices vitae auctor eu augue ut. Risus in hendrerit gravida rutrum quisque. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Tincidunt augue interdum velit euismod in pellentesque. Vel eros donec ac odio tempor orci. Id aliquet risus feugiat in ante metus. Aliquam purus sit amet luctus venenatis lectus magna. A lacus vestibulum sed arcu. Elementum curabitur vitae nunc sed velit dignissim sodales. Sagittis nisl rhoncus mattis rhoncus urna neque. Orci sagittis eu volutpat odio facilisis mauris. Feugiat nibh sed pulvinar proin gravida."
    },
    {
        id: 5,
        título: "macOS",
        texto: "Molestie at elementum eu facilisis. Egestas sed sed risus pretium quam. Malesuada nunc vel risus commodo viverra maecenas. Bibendum ut tristique et egestas quis ipsum. At imperdiet dui accumsan sit amet nulla. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Tortor posuere ac ut consequat semper viverra nam. Euismod lacinia at quis risus sed vulputate odio ut. Viverra accumsan in nisl nisi scelerisque. Leo integer malesuada nunc vel risus commodo viverra. Sit amet consectetur adipiscing elit duis tristique sollicitudin. Quam elementum pulvinar etiam non quam lacus suspendisse. Porttitor rhoncus dolor purus non enim. Aliquam sem fringilla ut morbi tincidunt augue interdum. Sed cras ornare arcu dui vivamus arcu. Tellus in metus vulputate eu scelerisque felis."
    },
    {
        id: 6,
        título: "Hola, mundo",
        texto: "Tellus at urna condimentum mattis pellentesque id nibh. Suspendisse in est ante in nibh. Imperdiet proin fermentum leo vel orci. Nullam non nisi est sit amet facilisis magna etiam tempor. Ultricies tristique nulla aliquet enim tortor at auctor urna. Morbi tincidunt augue interdum velit euismod in. Ipsum nunc aliquet bibendum enim facilisis. Elementum eu facilisis sed odio. Dui accumsan sit amet nulla. Sed felis eget velit aliquet. Eget est lorem ipsum dolor sit amet consectetur adipiscing. Sed turpis tincidunt id aliquet risus feugiat in ante metus."
    }
]

const Contenido = () => {
    
    let params = useParams();

    const id = params.idArticulo

    let artículo = Artículos.find((a) => a.id == id)

    return (
        <div>
            <Artículo título={artículo.título} texto={artículo.texto} />

        </div>
    )
}

export default Contenido
