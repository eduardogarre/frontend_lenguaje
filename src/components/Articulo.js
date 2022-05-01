const Artículo = ({ título, texto }) => {

    return (
        <div style={{overflowWrap: "break-word"}}>
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
