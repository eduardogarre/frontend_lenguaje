const Código = ({ código }) => {

    return (
        <div>
            <pre className="text-start h-100">
                <code className="h-100 w-100" style={{fontFamily: "Inconsolata"}}>
                    {código}
                </code>
            </pre>
        </div>
    )
}

export default Código
