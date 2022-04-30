import Acordeon from "./Acordeon"

const MenuLateral = () => {

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

    return (
        <Acordeon jerarquía={jerarquía} />
    )
}

export default MenuLateral
