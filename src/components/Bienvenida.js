import Boton from "./Boton"
import logo from '../img/logo22.png'

const Bienvenida = () => {

    return (
        <div className="text-center" style={{width:"40rem"}}>
            <img src={logo} alt="" style={{width:"7rem", height:"7rem"}} className="d-inline-block align-text-bottom" />
            <br/>
            <br/>
            <h3>Tu lenguaje de programación en español</h3>
            <br/>
            <br/>
            <p style={{fontSize: "1.25rem"}}><strong style={{fontSize: "1.5rem", fontWeight: 500}}>Ñ</strong> es un lenguaje de programación de <strong style={{fontWeight: 500}}>código abierto</strong>, con sintaxis similar a C y gramática en español empleando Unicode y UTF-8. Es un lenguaje <strong style={{fontWeight: 500}}>compilado a ejecutables nativos optimizados</strong>, aprovechando la potencia del <strong style={{fontWeight: 500}}>proyecto LLVM</strong>.</p>
        </div>
    )
}

export default Bienvenida
