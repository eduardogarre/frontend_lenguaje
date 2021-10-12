import PropTypes from 'prop-types'
import Tarea from './Tarea'

const Tareas = ({tareas}) => {
    return (
        <>
            {tareas.map((tarea) => (
                    <Tarea key={tarea.id} tarea={tarea} />
                ))}
        </>
    )
}

Tareas.defaultProps = {
    tareas: PropTypes.array
}

export default Tareas
