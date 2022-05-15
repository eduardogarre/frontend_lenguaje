import Acordeon from "./Acordeon"

const MenúLateral = () => {

    return (
        <div className="border rounded rounded-3 py-2 px-4" style={{ minWidth: "15rem", background: "#fafafa" }}>
            <Acordeon idRaíz={0}/>
        </div>
    )
}

export default MenúLateral
