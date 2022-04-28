const Código = ({ código }) => {

    return (
        <div>
            <pre>
                <code className="text-start h-100" style={{fontFamily: "Roboto Mono"}}>
                    {código}
                </code>
            </pre>
        </div>
    )
}

export default Código
