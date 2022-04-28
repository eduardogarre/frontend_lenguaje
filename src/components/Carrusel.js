import Código from './Código'

const Carrusel = () => {

    return (
        <div id="carruselCódigo" className="carousel slide carousel-fade carousel-dark shadow rounded-3 fs-6" data-bs-ride="carousel" style={{height: "22rem", width: "31rem", outline: "1px solid #1c8a65"}}>
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carruselCódigo" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carruselCódigo" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner p-3 pt-2">
                <div className="carousel-item active">
                    <Código código={`externo ent escribeln(nat8* _texto);

público ent inicia()
{
  escribeln("¡Hola, Mundo!\\n");

  devuelve 0;
}`} />
                </div>
                <div className="carousel-item">
                    <Código código={`nat factorial(nat x)
{
  si (x == 1)
  {
    devuelve 1;
  }
  sino
  {
    devuelve x * factorial(x - 1);
  }

  devuelve 1;
}`} />
                </div>
            </div>
        </div>
    )
}

export default Carrusel
