import Acordeon from "./Acordeon"

const jerarquía = [
    {
        id: 0,
        título: "Inicio",
        hijos: [

            {
                id: 1,
                título: "Introducción",
                hijos: []
            },
            {
                id: 2,
                título: "Instalación",
                hijos: [
                    {
                        id: 3,
                        título: "Windows",
                        hijos: []
                    },
                    {
                        id: 4,
                        título: "Linux",
                        hijos: []
                    },
                    {
                        id: 5,
                        título: "macOS",
                        hijos: []
                    }
                ]
            }

        ]
    },
    {
        id: 6,
        título: "Hola, mundo",
        hijos: []
    }
]

const MenuLateral = () => {

    return (
        <div className="border rounded rounded-3 py-2 px-4" style={{ width: "25rem", background: "#fafafa" }}>
            <Acordeon inicial={true} jerarquía={jerarquía} />
        </div>
    )
}

export default MenuLateral
