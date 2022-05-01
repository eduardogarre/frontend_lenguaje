const Artículo = ({ título, texto }) => {

    return (
        <div className="text-start" style={{ width: "40rem" }}>
            <h3>{título}</h3>
            <br />
            {
                texto.map((párrafo) => {
                    return (
                        <p>{párrafo}</p>
                    )
                })
            }
        </div>
    )
}

export default Artículo
