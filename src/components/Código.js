const Código = ({ código }) => {

    return (
        <div>
            <pre style={{border: "0px", boxShadow: "0px 0px #fff"}}>
                <code className="text-start h-100" style={{fontFamily: "Roboto Mono", textShadow: "4px 4px 8px #ddd"}}>
                    {código}
                </code>
            </pre>
        </div>
    )
}

export default Código
