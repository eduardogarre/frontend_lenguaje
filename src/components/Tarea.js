const Tarea = ({tarea}) => {
    return (
        <div className="tarea">
            <h3>{tarea.text}</h3>
            <p>{tarea.day}</p>
        </div>
    )
}

export default Tarea
