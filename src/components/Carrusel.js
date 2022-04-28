import Código from './Código'

const Carrusel = () => {

    return (
        <div id="carruselCódigo" className="carousel slide carousel-dark shadow border border-light rounded-3 fs-5" data-bs-ride="carousel" style={{ height: "21.5em", width: "35em" }}>
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carruselCódigo" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carruselCódigo" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner px-5 mx-5">
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
            <button class="carousel-control-prev" type="button" data-bs-target="#carruselCódigo" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carruselCódigo" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carrusel
