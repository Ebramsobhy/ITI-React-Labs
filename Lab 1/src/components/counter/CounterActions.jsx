const CounterActions = ({increment, decrement}) => {
    return (
        <div className="btn-wrapper">
            <button className="btn btn-dark" onClick={increment}>Increment +</button>
            <button className="btn btn-danger" onClick={decrement}>Increment -</button>
        </div>
    )
}

export default CounterActions

