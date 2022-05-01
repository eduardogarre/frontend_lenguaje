const Artículo = ({título, texto}) => {

    return (
        <div className="text-center" style={{width:"40rem"}}>
            <h3>{título}</h3>
            <p>{texto}</p>
        </div>
    )
}

export default Artículo
