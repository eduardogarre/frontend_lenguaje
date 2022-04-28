const Código = ({ código }) => {

    return (
        <div>
            <pre className="text-start" style={{height: "24em"}}>
                <code className="h-100 w-100">
                    {código}
                </code>
            </pre>
        </div>
    )
}

export default Código
