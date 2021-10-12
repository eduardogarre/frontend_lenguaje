const Boton = ({color, texto}) => {
    return (
            <button className="btn" style={{backgroundColor: color}}>
                {texto}
            </button>
        )
}

export default Boton
